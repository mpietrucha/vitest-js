import { describe, expect, it, test } from 'vitest'
import { defineConfig } from 'vitest/config'

export const useConfig = defineConfig

export const useIt = (fixtures = {}) => {
    return it.extend(fixtures)
}

export const useTest = (fixtures = {}) => {
    return test.extend(fixtures)
}

export const useExpect = () => {
    return expect
}

export const useDescribe = () => {
    return describe
}

export default () => ({
    useIt,
    useTest,
    useConfig,
    useExpect,
    useDescribe,
})
