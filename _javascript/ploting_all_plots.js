/**
 * @typedef {Object} CsvDataRow
 * @property {string} Origin
 * @property {number} Mean_grade
*/

import {plotMap} from './ploting/plot_country.js';
import {plotMaps} from "./ploting/multi_map_plot";
import {plotBoxPlot} from "./ploting/box_plots";
import {plotTimeSeries} from "./ploting/time_series";


//plotMap();

plotMaps()

plotBoxPlot()

plotTimeSeries()
