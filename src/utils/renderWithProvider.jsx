import { render } from '@testing-library/react'
import { AppProvider } from '@shopify/polaris'

export const renderWithProvider = (ui) => {
  return render(
    <AppProvider i18n={{}}>
      {ui}
    </AppProvider>
  );
};
