import useUtls from '@composables/useUtils'
import useVitest from '@composables/useVitest'

export { useUtls }

export const it = useIt()

export const test = useTest()

export const expect = useExpect()

export const describe = useDescribe()

export default ({ fixtures } = {}) => {
    const it = useIt(fixtures)

    const test = useTest(fixtures)

    return { it, test, expect, describe }
}