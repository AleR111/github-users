import {get} from 'lodash';

const getRegexpFunction =
    (pattern: string | RegExp) =>
    (flags: string = '') =>
        new RegExp(pattern, flags);

const pathInStringStructure = getRegexpFunction(/\w[\w.]*\w/);

export const combineString = <T>(stringStructure: string, value: T) => {
    const valueKeys = stringStructure.match(pathInStringStructure('g'));
    return valueKeys?.reduce((finalString: string, valueKey: string) => {
        const finalText = get(value, valueKey, '');
        return finalString.replace(valueKey, finalText);
    }, stringStructure);
};
