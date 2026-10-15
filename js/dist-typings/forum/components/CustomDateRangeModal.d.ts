import { IFormModalAttrs } from 'flarum/common/components/FormModal';
import FormModal from 'flarum/common/components/FormModal';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
export interface ICustomDateRangeModalAttrs extends IFormModalAttrs {
    onApply?: (range: {
        start: string;
        end: string;
    }) => void;
}
export default class CustomDateRangeModal<CustomAttrs extends ICustomDateRangeModalAttrs = ICustomDateRangeModalAttrs> extends FormModal<CustomAttrs> {
    protected start: string;
    protected end: string;
    private pendingApply;
    oninit(vnode: Mithril.Vnode): void;
    onremove(vnode: Mithril.Vnode): void;
    className(): string;
    title(): Mithril.Children;
    content(): [Mithril.Children, Mithril.Children];
    body(): JSX.Element;
    footer(): JSX.Element | null;
    footerItems(): ItemList<Mithril.Children>;
    private isValid;
}
