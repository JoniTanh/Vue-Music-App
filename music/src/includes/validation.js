import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app, { t }) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('passwords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: t('validation.required', { field: ctx.field }),
          min: t('validation.min', { field: ctx.field }),
          max: t('validation.max', { field: ctx.field }),
          alpha_spaces: t('validation.alpha_spaces', { field: ctx.field }),
          email: t('validation.email', { field: ctx.field }),
          min_value: t('validation.min_value', { field: ctx.field }),
          max_value: t('validation.max_value', { field: ctx.field }),
          excluded: t('validation.excluded', { field: ctx.field }),
          country_excluded: t('validation.country_excluded'),
          passwords_mismatch: t('validation.passwords_mismatch'),
          tos: t('validation.tos')
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : t('validation.default_error', { field: ctx.field })

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
