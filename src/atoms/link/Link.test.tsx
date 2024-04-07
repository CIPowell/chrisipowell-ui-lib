import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';

describe('Link Element', () => {
    test('it renders the component with the correct classname', () => {
        render(<Link text="Hello World!" href="#" theme="normal" />);

        let link = screen.getByRole("link");
        expect(link.innerHTML).toEqual('Hello World!');
        expect(link.classList).toContain('normal');
    })
})