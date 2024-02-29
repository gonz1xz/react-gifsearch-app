import { GifCard } from '../../src/components/';
import { render, screen } from '@testing-library/react';

describe('Pruebas en GifCard.jsx', () => {

    const title = 'Saitama';;
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe coincidir con snapshot', () => {


        const { container } = render(<GifCard title={title} url={url} />);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado ', () => {

        render(<GifCard title={title} url={url} />);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el titulo en el componente', () => {

        // render(<GifCard title={title} url={url} />);

        // expect(screen.getByText(title)).toBeTruthy();

    });




});
