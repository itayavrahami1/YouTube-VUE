'use strict';

import {DbService} from './db-service.js';

const KEY = 'beers';

export default {
    query,
    get,
    remove,
    save,
    getEmptyBeer
}

async function query() {
    var beers = await DbService.query(KEY);
    if (!beers || !beers.length) {
        beers = _createDefaultBeers();
        await DbService.insert(KEY, beers);
    }
    return beers;
}

function get(id) {
    return DbService.get(KEY, id);
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(beer) {
    if (beer._id) return DbService.put(KEY, beer);
    else return DbService.post(KEY, beer)
}

function getEmptyBeer() {
    return {
        brand: '',
        alc: 0
    }
}

function _createDefaultBeers() {
    return [
        _createBeer('Goldstat', 50),
        _createBeer('Guinneps', 73),
        _createBeer('Corola', 100),
    ];
}

function _createBeer(brand, alc) {
    return {
        brand,
        alc,
    }
}