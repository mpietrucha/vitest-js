export const useFixture = value => {
    return ({}, use) => use(value)
}

export const useUnfixture = (value, context = {}) => {
    return value(context, fixture => fixture)
}

export const useWithout = (fixtures = [], values = []) => {
    return values.filter(value => !fixtures.includes(value))
}

export default () => ({ useFixture, useUnfixture, useWithout })
