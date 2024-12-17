import useUtils, { useFixture, useUnfixture } from '@composables/useUtils'

export { useFixture, useUnfixture, useUtils }

export const useWithout = fixtures => {
    const { useWithout } = useUtils()

    return useFixture((...values) => useWithout(fixtures, values))
}

export default () => ({ useFixture, useUnfixture, useWithout })
