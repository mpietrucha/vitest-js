import useConfig, { useAliases, useDefineConfig } from '@composables/useConfig'

export { useConfig }

export const aliases = useAliases()

export const config = useDefineConfig()

export default ({ alias = {}, ...options } = {}) => {
    alias = useAliases(alias)

    const resolve = { alias }

    return config({ resolve, ...options })
}
