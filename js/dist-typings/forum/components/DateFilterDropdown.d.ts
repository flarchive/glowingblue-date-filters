import Component, { ComponentAttrs } from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import type { NestedStringArray } from '@askvortsov/rich-icu-message-formatter';
export interface IDateFilterDropdownAttrs extends ComponentAttrs {
    dateFilterMap: Record<string, string>;
    dateFilterOptions: Record<string, NestedStringArray>;
}
export default class DateFilterDropdown<CustomAttrs extends IDateFilterDropdownAttrs = IDateFilterDropdownAttrs> extends Component<CustomAttrs> {
    view(): JSX.Element;
    dateFilterDropdownLabel(): string | NestedStringArray;
    dateFilterDropdownItems(): ItemList<Mithril.Children>;
    presetFilterOptionsView(): JSX.Element[];
    customRangeView(): JSX.Element;
}
