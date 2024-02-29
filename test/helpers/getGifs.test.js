import { getGifs } from '../../src/helpers/';

describe('Pruebas en getGifs.js', () => {

    test('debe de retonar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs)

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

    });




});
