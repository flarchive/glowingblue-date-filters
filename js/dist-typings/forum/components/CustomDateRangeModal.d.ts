import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import ItemList from 'flarum/common/utils/ItemList';
import type { NestedStringArray } from '@askvortsov/rich-icu-message-formatter';
import type Mithril from 'mithril';
export interface ICustomDateRangeModalAttrs extends IInternalModalAttrs {
    onApply?: (range: {
        start: string;
        end: string;
    }) => void;
}
export default class CustomDateRangeModal<CustomAttrs extends ICustomDateRangeModalAttrs = ICustomDateRangeModalAttrs> extends Modal<CustomAttrs> {
    protected start: any;
    protected end: any;
    private pendingApply;
    oninit(vnode: Mithril.Vnode): void;
    onremove(vnode: Mithril.Vnode): void;
    className(): string;
    title(): string | NestedStringArray;
    content(): [Mithril.Children, Mithril.Children];
    body(): JSX.Element;
    footer(): JSX.Element | null;
    footerItems(): ItemList<Mithril.Children>;
    private isValid;
}
