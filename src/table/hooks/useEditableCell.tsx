import { CreateElement, SetupContext } from 'vue';
import { TableRowData, PrimaryTableCellParams, TdPrimaryTableProps } from '../type';
import EditableCell from '../editable-cell';

// 必须使用这个 Hook，否则无法在 setup 中渲染
export default function useEditableCell(
  props: TdPrimaryTableProps,
  context: SetupContext,
  events: { [key: string]: any },
) {
  const renderEditableCell = (h: CreateElement, p: PrimaryTableCellParams<TableRowData>) => (
    <EditableCell props={p} on={events} scopedSlots={context.slots} />
  );

  return {
    renderEditableCell,
  };
}
