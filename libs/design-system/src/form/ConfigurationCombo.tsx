import React from 'react'
import { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form'
import { FieldLabelAndError } from '../components/Form'
import { CreatableComboBox } from '../core/CreatableComboBox'
import { ConfigurationTipText } from './ConfigurationTipText'
import {
  ConfigFields,
  useRegisterForm,
} from './configurationFields'

type Option = {
  value: string
  label: string
}

type Props<Values extends FieldValues, Categories extends string> = {
  name: Path<Values>
  form: UseFormReturn<Values>
  fields: ConfigFields<Values, Categories>
}

export const createSyntheticEvent = <T extends Element, E extends Event>(event: E): React.SyntheticEvent<T, E> => {
  let isDefaultPrevented = false;
  let isPropagationStopped = false;
  const preventDefault = () => {
    isDefaultPrevented = true;
    event.preventDefault();
  }
  const stopPropagation = () => {
    isPropagationStopped = true;
    event.stopPropagation();
  }
  return {
    nativeEvent: event,
    currentTarget: event.currentTarget as EventTarget & T,
    target: event.target as EventTarget & T,
    bubbles: event.bubbles,
    cancelable: event.cancelable,
    defaultPrevented: event.defaultPrevented,
    eventPhase: event.eventPhase,
    isTrusted: event.isTrusted,
    preventDefault,
    isDefaultPrevented: () => isDefaultPrevented,
    stopPropagation,
    isPropagationStopped: () => isPropagationStopped,
    persist: () => {},
    timeStamp: event.timeStamp,
    type: event.type,
  };
}

export function ConfigurationCombo<
  Values extends FieldValues,
  Categories extends string
>({ name, form, fields }: Props<Values, Categories>) {
  const field = fields[name]
  const { options, suggestion, suggestionTip } = field
  const { ref, setValue, onBlur, value, error } = useRegisterForm({
    name,
    form,
    field,
  })
  const onComboChange = (option: any) => {
    setValue(option.value as PathValue<Values, Path<Values>>, true)
    const e = new Event('change')
    Object.defineProperty(e, 'target', { writable: false, value: option })
    if (field.validation && field.validation.onChange) field.validation.onChange(e)
  }

  return (
    <div className="flex flex-col gap-3 items-end">
      <div className="flex flex-col gap-3 w-[220px]">
        <div className="flex justify-end w-full">
          <CreatableComboBox
            ref={ref}
            size="small"
            value={{value: value, label: value}}
            setValue={setValue}
            state={
              error
                ? 'invalid'
                : 'valid'
            }
            onChange={onComboChange}
            onBlur={onBlur}
            options={options ? options : []}
          />
        </div>
        <div className="flex flex-col gap-2">
          {suggestion !== undefined && suggestionTip && (
            <ConfigurationTipText
              label="Suggestion"
              tip={suggestionTip}
              value={suggestion as string}
              onClick={() => {
                setValue(suggestion as PathValue<Values, Path<Values>>, true)
              }}
            />
          )}
        </div>
      </div>
      <div className="h-[20px]">
        <FieldLabelAndError form={form} name={name} />
      </div>
    </div>
  )
}
