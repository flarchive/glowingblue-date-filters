import Component, { ComponentAttrs } from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
export interface IDateFilterDropdownAttrs extends ComponentAttrs {
    dateFilterMap: Record<string, string>;
    dateFilterOptions: Record<string, Mithril.Children>;
}
export default class DateFilterDropdown<CustomAttrs extends IDateFilterDropdownAttrs = IDateFilterDropdownAttrs> extends Component<CustomAttrs> {
    view(): JSX.Element;
    dateFilterDropdownLabel(): Mithril.Children;
    dateFilterDropdownItems(): ItemList<Mithril.Children>;
    presetFilterOptionsView(): JSX.Element[];
    customRangeView(): JSX.Element;
}
