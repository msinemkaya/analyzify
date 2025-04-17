import { Layout, Page } from '@shopify/polaris'
import { dashboardStats, latestReviews, monthlySalesGoal, overallStats } from '../../data/homepageData.js'
import { WelcomeCard } from '../sections/WelcomeCard.jsx'
import { StatCards } from '../sections/StatCards.jsx'
import { OutOfStockBanner } from '../sections/OutOfStockBanner.jsx'
import { ProgressBarCard } from '../common/ProgressBarCard.jsx'
import { OverAllStatCard } from '../sections/OverAllStatCard.jsx'
import { ReviewList } from '../sections/ReviewList.jsx'

export const HomePage = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <WelcomeCard/>
        </Layout.Section>

        <Layout.Section>
          <StatCards stats={ dashboardStats }/>
        </Layout.Section>

        <Layout.Section>
          <OutOfStockBanner itemCount={ overallStats.outOfStock }/>
        </Layout.Section>

        <Layout.Section>
          <ProgressBarCard
            title="Monthly Sales Goal"
            target={ monthlySalesGoal.target }
            current={ monthlySalesGoal.current }
          />
        </Layout.Section>

        <Layout.Section>
          <OverAllStatCard stats={ overallStats }/>
        </Layout.Section>

        <Layout.Section>
          <ReviewList reviews={ latestReviews }/>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
