import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export const useDefineConfig = () => {
    return defineConfig
}

export const useDefaultAliases = () => ({
    '@test': resolve('__tests__'),
    '@fixtures': resolve('__test__/fixtures'),
})

export const useAliases = (aliases = {}) => ({
    ...useDefaultAliases(),
    ...aliases,
})

export default () => ({ useDefineConfig, useDefaultAliases, useAliases })
