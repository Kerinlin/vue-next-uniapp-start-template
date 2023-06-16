import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss';
import { presetApplet, presetRemRpx, transformerApplet, transformerAttributify } from 'unocss-applet';

export default defineConfig({
  presets: [presetApplet(), presetRemRpx()],
  rules: [
    // custom-margin
    [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}rpx` })],
    [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}rpx` })],
    [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}rpx` })],
    [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}rpx` })],
    [/^m-(\d+)$/, match => ({ margin: `${match[1]}rpx` })],
    // custom-padding
    [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}rpx` })],
    [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}rpx` })],
    [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}rpx` })],
    [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}rpx` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1]}rpx` })],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({ ignoreAttributes: ['block'] }),
    transformerApplet(),
  ],
  shortcuts: {
    'init-btn': 'border-none cursor-pointer outline-none',
    'space-between': 'flex flex-row justify-between items-center',
    'flex-start': 'flex flex-row justify-start items-center',
  },
});
