import {
  Button,
  CaretDown16,
  SettingsAdjust16,
  Select,
  PoolCombo,
  Label,
  Popover,
  MenuItemRightSlot,
  BaseMenuItem,
  MenuSeparator,
  Option,
} from '@siafoundation/design-system'
import { TableColumnId } from '../../contexts/files/types'
import { useFiles } from '../../contexts/files'

export function FilesViewDropdownMenu() {
  const {
    configurableColumns,
    toggleColumnVisibility,
    resetDefaultColumnVisibility,
    sortOptions,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    enabledColumns,
  } = useFiles()
  return (
    <Popover
      trigger={
        <Button size="small" tip="Configure view" tipAlign="end">
          <SettingsAdjust16 />
          View
          <CaretDown16 />
        </Button>
      }
      contentProps={{
        align: 'end',
        className: 'max-w-[300px]',
      }}
    >
      <BaseMenuItem>
        <Label>Order by</Label>
        <MenuItemRightSlot>
          <Select
            value={sortColumn}
            onChange={(e) => {
              setSortColumn(e.currentTarget.value as TableColumnId)
            }}
          >
            {Object.entries(sortOptions).map(([category, options]) => (
              <optgroup key={category} label={category}>
                {options.map((column) => (
                  <Option key={column.id} value={column.id}>
                    {column.label}
                  </Option>
                ))}
              </optgroup>
            ))}
          </Select>
        </MenuItemRightSlot>
      </BaseMenuItem>
      <BaseMenuItem>
        <Label>Direction</Label>
        <MenuItemRightSlot>
          <Select
            value={sortDirection}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onChange={(e) => {
              setSortDirection(e.currentTarget.value as 'asc' | 'desc')
            }}
          >
            <Option key="desc" value="desc">
              descending
            </Option>
            <Option key="asc" value="asc">
              ascending
            </Option>
          </Select>
        </MenuItemRightSlot>
      </BaseMenuItem>
      <MenuSeparator />
      <BaseMenuItem>
        <Label>Display properties</Label>
        <MenuItemRightSlot>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              resetDefaultColumnVisibility()
            }}
          >
            Reset default
          </Button>
        </MenuItemRightSlot>
      </BaseMenuItem>
      <BaseMenuItem>
        <PoolCombo
          options={configurableColumns.map((column) => ({
            label: column.label,
            value: column.id,
          }))}
          values={enabledColumns}
          onChange={(value) => toggleColumnVisibility(value)}
        />
      </BaseMenuItem>
    </Popover>
  )
}
