import React from 'react'
import {screen, render} from '@testing-library/react'

import { capitalizeFirstLetter } from '../Utils/capitalizeFistLetter'
import { dateFormatter } from '../Utils/dateFormatter'
import { moneyFormatter } from '../Utils/moneyFormatter'

describe('Funciones separadas de utilidad', () => {

    describe('Tests a /Utils/capitalizeFirstLetter.js', () => {

        test('Debe recibir un string', () => {
            const result = capitalizeFirstLetter('error');
            expect(typeof result).toBe('string');
        });

        test('Debe retornar el string con la primera letra en mayuscula', () => {
            expect(capitalizeFirstLetter('enviado')).toBe('Enviado');
        });
    });

    describe('Tests a /Utils/dateFormatter.js', () => {

        test('Debe retornar un string', () => {
            const result = dateFormatter('2022-07-25T10:23:18.000-03:00');
            expect(typeof result).toBe('string');
        });

        test('Debe retornar una fecha valida', () => {
            expect(dateFormatter('2022-07-25T10:23:18.000-03:00')).toBe('25 de julio de 2022');
        });

    });

    describe('Tests a /Utils/moneyFormatter.js', () => {
//69999.99
        test('Debe retornar un string', () => {
            const result = moneyFormatter(69999.99, 'ARS');
            expect(typeof result).toBe('string');
        });

        test('Debe retornar un numero sin decimales y redondeado', () => {
            expect(moneyFormatter(69999.99, 'ARS')).toBe('$ 70.000');
        });

    });

});
