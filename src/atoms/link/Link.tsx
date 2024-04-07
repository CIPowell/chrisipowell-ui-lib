import React from 'react';
import { LinkProps } from './Link.types';

import styles from './Link.module.css';

export default function Link({ text, href, theme }: LinkProps) {
    return (
        <a href={href} className={styles[theme]}>
            {text}
        </a>
    );
}
