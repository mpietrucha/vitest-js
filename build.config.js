import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export const alias = {
    '@': resolve('src'),
    '@test': resolve('__tests__'),
    '@composables': resolve('src/composables'),
}

export const rollup = {
    inlineDependencies: true,
    output: { exports: 'named' },
}

export const declaration = false

export default defineBuildConfig({ alias, rollup, declaration })
