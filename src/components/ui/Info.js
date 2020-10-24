import React from 'react';
import {MODE_NONE} from '../../services/mode';
import {INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORTCUT_KEY, TOTAL_COUNT} from '../../assets/text/en_US';

export default function Info(props) {
    const message = props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;
    const totalCount = props.count;

return <p className="info">{message} - {TOTAL_COUNT} {totalCount}</p>;
}
