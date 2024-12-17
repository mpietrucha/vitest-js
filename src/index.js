import useVitest, {
    useDescribe,
    useExpect,
    useIt,
    useTest,
} from '@composables/useVitest'

export { useVitest }

export const it = useIt()

export const test = useTest()

export const expect = useExpect()

export const describe = useDescribe()

export default ({ fixtures = {} } = {}) => {
    const it = useIt(fixtures)

    const test = useTest(fixtures)

    return { describe, expect, it, test }
}
