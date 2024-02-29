import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

/*
Escribir en el input
Postear el formulario
Snapshop
Si envio misma categoria
Si envio categoria distinta
*/

describe('Pruebas en GifExpertApp', () => {

    test('Debe cambiar el valor del input ', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: "Cars" } });

        screen.debug();

        expect(input.value).toBe('Cars');

    });

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

    });

    test('Si envio misma categoria no realiza ninguna accion', () => {

    });

    test('Si envio otra categoria se agrega al array', () => {

    });




});
