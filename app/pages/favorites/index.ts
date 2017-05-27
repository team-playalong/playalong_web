import * as angular from 'angular';
import { PlyFavorites, FavoritesCtrl } from './favorites.component';

angular.module('PlyFavorites', [])
.component('plyFavorites', PlyFavorites)
.controller('FavoritesCtrl', FavoritesCtrl);
