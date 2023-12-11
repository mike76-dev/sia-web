import React, {
    useMemo,
    useState,
    useEffect,
  } from 'react'
  import {
    components,
    GroupBase,
    SelectComponentsConfig,
    SingleValue,
  } from 'react-select'
  import Select from 'react-select/creatable'
  import { cx, cva } from 'class-variance-authority'
  import { Option } from './Select'
  
  const controlStyles = cva(
    [
      'font-sans',
      'font-normal',
      'tabular-nums',
      'flex-shrink-0',
      'rounded',
      'flex items-center',
      'border',
      'bg-white dark:bg-graydark-50',
      'autofill:bg-white autofill:dark:bg-graydark-50',
      'autofill:shadow-fill-white autofill:dark:shadow-fill-graydark-50',
      'hover:bg-gray-300 dark:hover:bg-graydark-300',
      'disabled:pointer-events-none',
      'disabled:bg-gray-200 disabled:dark:bg-graydark-200',
      'autofill:bg-blue-100 autofill:dark:bg-blue-800',
      'focus-within:z-10',
      'focus-within:ring ring-blue-500 dark:ring-blue-200',
    ],
    {
      variants: {
        size: {
          small: 'h-7 text-sm px-1',
          medium: 'h-10 text-base px-3',
          large: 'h-12 text-lg px-3',
        },
        state: {
          default: [
            'border-gray-400 dark:border-graydark-400',
            'enabled:hover:border-gray-500 enabled:hover:dark:border-graydark-500',
          ],
          invalid: ['border-red-500 dark:border-red-400'],
          valid: ['border-gray-400 dark:border-graydark-400'],
        },
      },
      defaultVariants: {
        state: 'default',
        size: 'small',
      },
    }
  )
  
  const inputStyles = cva(
    [
      'font-sans',
      'outline-none m-0 p-0 w-full',
      'text-gray-1100 dark:text-white',
      'disabled:text-gray-400 disabled:dark:text-graydark-400',
    ],
    {
      variants: {
        size: {
          small: 'h-7 text-sm px-1',
          medium: 'h-10 text-base px-3',
          large: 'h-12 text-lg px-3',
        },
        state: {
          default: [],
          invalid: [],
          valid: [],
        },
      },
      defaultVariants: {
        state: 'default',
        size: 'small',
      },
    }
  )
  
  const menuStyles = cva(
    [],
    {
      variants: {
        size: {
          small: 'text-sm px-1',
          medium: 'text-base px-3',
          large: 'text-lg px-3',
        },
        state: {
          default: [],
          invalid: [],
          valid: [],
        },
      },
      defaultVariants: {
        state: 'default',
        size: 'small',
      },
    }
  )
  
  const optionStyles = cva(
    [
      'font-sans',
      'bg-white dark:bg-graydark-50',
      'hover:bg-gray-300 dark:hover:bg-graydark-300',
      'text-gray-1100 dark:text-white',
      'hover:cursor-pointer',
      'pl-2',
    ],
    {
      variants: {
        size: {
          small: 'h-7 text-sm px-1 py-1',
          medium: 'h-10 text-base px-3 py-3',
          large: 'h-12 text-lg px-3 py-3',
        },
        state: {
          default: [],
          invalid: [],
          valid: [],
        },
      },
      defaultVariants: {
        state: 'default',
        size: 'small',
      },
    }
  )
  
  const styles = {
    placeholder(base: any, state: any) {
      return {
        ...base,
        display: state.isFocused && 'none',
      }
    }
  }
  
  type Option = {
    value: string
    label: string
  }
  
  type Props = {
    value?: Option
    setValue?: any
    onChange?: (option: SingleValue<Option>) => void
    onBlur?: (event: any) => void
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    prefix?: React.ReactNode
    indicators?: boolean
    state?: 'valid' | 'invalid' | 'default'
    options: Option[]
    className?: string
  }
  
  export const CreatableComboBox = React.forwardRef<any, Props>(({
    value,
    setValue,
    onChange,
    options,
    disabled,
    size = 'small',
    prefix,
    indicators = true,
    state,
    className,
  }: Props, ref: React.Ref<any>) => {
    const customComponents = useMemo(() => {
      const comps: Partial<
        SelectComponentsConfig<Option, false, GroupBase<Option>>
      > = {
        Control: ({ children, ...props }) => {
          return (
            <components.Control {...props}>
              {prefix && <div className="pl-1">{prefix}</div>}
              {children}
            </components.Control>
          )
        },
        Input: ({ ...props }) => {
          return (
            <components.Input {...props} isHidden={false}>
            </components.Input>
          )
        },
        NoOptionsMessage: () => {
          return (<></>)
        },
        Option: ({ children, ...props }) => {
          return (
            <components.Option {...props}>
              {children}
            </components.Option>
          )
        },
        SingleValue: () => {
          return (<></>)
        },
      }
  
      if (!indicators) {
        comps.IndicatorsContainer = () => {
          return null
        }
      }
      return comps
    }, [prefix, indicators])
  
    const [inputValue, setInputValue] = useState(value?.label);
  
    const onInputChange = (inputValue: string, { action }: any) => {
      if (action === "input-blur") {
        setInputValue(value ? value.label : "");
      } else if (action === "input-change") {
        setInputValue(inputValue);
      }
    };
  
    const onSelectChange = (option: any) => {
      setValue(option);
      setInputValue(option ? option.label : "");
      if (onChange) onChange(option)
    };
  
    const onCreateOption = (inputValue: string) => {
      const newOption = { value: inputValue, label: inputValue }
      onSelectChange(newOption)
    }
  
    useEffect(() => {
      setInputValue(value?.label);
    }, [value])
  
    return (
      <div className="w-full">
        <Select
          ref={ref}
          options={options}
          isDisabled={disabled}
          menuPlacement="auto"
          placeholder="Type or Select..."
          value={value}
          inputValue={inputValue}
          onInputChange={onInputChange}
          onChange={onSelectChange}
          onCreateOption={onCreateOption}
          createOptionPosition="first"
          controlShouldRenderValue={false}
          escapeClearsValue={true}
          filterOption={() => true}
          formatCreateLabel={(value: string) => value}
          unstyled={true}
          classNamePrefix="react-select"
          className="appearance-none flex-1 bg-transparent outline-none w-full h-full pl-1 pr-1"
          components={customComponents}
          styles={styles}
          classNames={{
            control: () => controlStyles({ size, state, className }),
            input: () => inputStyles({ size, state, className }),
            menu: () => menuStyles({ size, state, className }),
            menuList: () => 'border border-gray-400 dark:border-graydark-400 rounded',
            option: ({ isFocused }) => cx(
              isFocused ? 'bg-gray-300 dark:bg-graydark-300' : '',
              optionStyles({ size, state, className })
            ),
            placeholder: () => 'pl-1 text-gray-700 dark:text-graydark-700',
          }}
        />
      </div>
    )
  })
  