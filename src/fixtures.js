import useFixtures, {
    useFixture as fixture,
    useUnfixture as unfixture,
    useWithout,
} from '@composables/useFixtures'

export { fixture, unfixture, useFixtures, useWithout as without }

export default ({ fixtures } = {}) => {
    const without = useWithout(fixtures)

    return { fixture, unfixture, without }
}
