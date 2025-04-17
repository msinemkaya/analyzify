import { DataTable, TextField } from '@shopify/polaris'
import { getStatusBadge } from '../../utils/getStatusBadge.jsx'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ItemDetailModal } from '../common/ItemDetailModal.jsx'

export const CustomizedTable = ({
  data = [],
  columns = [],
  badgeKey = null,
  itemsPerPage = 10,
  selectedStatus = 'All',
  searchKey = '',
  rowClickable = false,
}) => {
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ sortIndex, setSortIndex ] = useState(null)
  const [ sortDirection, setSortDirection ] = useState('ascending')
  const [ hasNext, setHasNext ] = useState(false)
  const [ searchValue, setSearchValue ] = useState('')
  const [ selectedItem, setSelectedItem ] = useState(null)

  const filteredData = useMemo(() => {
    let result = data.filter((item) => {
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus
      const matchesSearch =
        searchKey && searchValue
          ? item[searchKey]?.toLowerCase().includes(searchValue.toLowerCase())
          : true
      return matchesStatus && matchesSearch
    })

    if ( sortIndex !== null ) {
      const { key } = columns[sortIndex]
      result = [ ...result ].sort((a, b) => {
        let aVal = a[key]
        let bVal = b[key]

        if ( typeof aVal === 'string' && aVal.includes('$') ) {
          aVal = parseFloat(aVal.replace('$', ''))
          bVal = parseFloat(bVal.replace('$', ''))
        }

        if ( aVal < bVal ) return sortDirection === 'ascending' ? -1 : 1
        if ( aVal > bVal ) return sortDirection === 'ascending' ? 1 : -1
        return 0
      })
    }

    return result
  }, [ data, selectedStatus, searchKey, searchValue, sortIndex, sortDirection ])

  const paginatedData = useMemo(() => {
    const start = ( currentPage - 1 ) * itemsPerPage
    return filteredData.slice(start, start + itemsPerPage)
  }, [ filteredData, currentPage ])

  const rows = paginatedData.map((item, rowIndex) =>
    columns.map(({ key }) => {
      const value = key === badgeKey ? getStatusBadge(item[key]) : item[key]

      return (
        <span
          style={ { cursor: rowClickable ? 'pointer' : 'auto', display: 'block' } }
          onClick={ () => rowClickable && handleRowClick(rowIndex) }
        >
        { value }
      </span>
      )
    }),
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [ sortIndex, sortDirection ])

  useEffect(() => {
    setHasNext(filteredData.length > currentPage * itemsPerPage)
  }, [ filteredData, currentPage ])

  const handleSort = useCallback((index, direction) => {
    setSortIndex(index)
    setSortDirection(direction)
  }, [])

  const handleSearchChange = (newValue) => setSearchValue(newValue)

  const handleRowClick = (rowIndex) => {
    const item = paginatedData[rowIndex]
    setSelectedItem(item)
  }

  return (
    <>
      <TextField
        label=""
        placeholder="Search..."
        value={ searchValue }
        onChange={ handleSearchChange }
        autoComplete="on"
      />

      <DataTable
        columnContentTypes={ columns.map((col) => col.type) }
        headings={ columns.map((col) => col.label) }
        rows={ rows }
        footerContent={ `Showing ${ rows.length } of ${ filteredData.length }` }
        sortable={ columns.map((col) => col.sortable || false) }
        onSort={ handleSort }
        pagination={ {
          hasNext,
          hasPrevious: currentPage > 1,
          onNext: () => setCurrentPage((prev) => prev + 1),
          onPrevious: () => setCurrentPage((prev) => prev - 1),
        } }
      />

      { selectedItem && (
        <ItemDetailModal item={ selectedItem } open={ !!selectedItem } onClose={ () => setSelectedItem(null) }/>
      ) }
    </>
  )
}
