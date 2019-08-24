(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--16-3!./src/styles.less ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n@charset \"UTF-8\";\n.fc {\n  direction: ltr;\n  text-align: left;\n}\n.fc-rtl {\n  text-align: right;\n}\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em;\n}\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: 0.3;\n}\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: 0.3;\n}\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 4px;\n}\n.fc-rtl .fc-popover .fc-header {\n  flex-direction: row-reverse;\n}\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px;\n}\n.fc-popover .fc-header .fc-close {\n  cursor: pointer;\n  opacity: 0.65;\n  font-size: 1.1em;\n}\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px;\n}\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0;\n}\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */\n}\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */\n}\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */\n}\n.fc th {\n  text-align: center;\n}\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top;\n}\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */\n}\n/* Internal Nav Links\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer;\n}\na[data-goto]:hover {\n  text-decoration: underline;\n}\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0;\n}\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n     the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent;\n}\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */\n}\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative;\n}\n.fc-row .fc-bg {\n  z-index: 1;\n}\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */\n}\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent;\n}\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2;\n}\n.fc-row .fc-highlight-skeleton {\n  z-index: 3;\n}\n/*\nrow content (which contains day/week numbers and events) as well as \"mirror\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */\n}\n.fc-row .fc-mirror-skeleton {\n  z-index: 5;\n}\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-mirror-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n}\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-mirror-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0;\n}\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-mirror-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0;\n}\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch;\n}\n/* TODO: move to timegrid/daygrid */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */\n}\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: 0.85em;\n  line-height: 1.4;\n  border-radius: 3px;\n  border: 1px solid #3788d8;\n}\n.fc-event,\n.fc-event-dot {\n  background-color: #3788d8;\n  /* default BACKGROUND color */\n}\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n}\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */\n}\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed;\n}\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2;\n}\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4;\n}\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none;\n}\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block;\n}\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.fc-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: 0.25;\n}\n/* Event Dragging\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-dragging.fc-selected {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n}\n.fc-event.fc-dragging:not(.fc-selected) {\n  opacity: 0.75;\n}\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0;\n}\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */\n}\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */\n}\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */\n}\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px;\n}\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */\n}\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */\n}\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px;\n}\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */\n}\n.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {\n  margin-top: 0;\n  /* except for mirror skeleton */\n}\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden;\n}\n.fc-day-grid-event .fc-time {\n  font-weight: bold;\n}\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */\n}\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */\n}\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: 0.85em;\n  cursor: pointer;\n  text-decoration: none;\n}\na.fc-more:hover {\n  text-decoration: underline;\n}\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none;\n}\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */\n}\n.fc-more-popover {\n  z-index: 2;\n  width: 220px;\n}\n.fc-more-popover .fc-event-container {\n  padding: 10px;\n}\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red;\n}\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/*\nTODO: more distinction between this file and common.css\n*/\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd;\n}\n.fc-unthemed .fc-popover {\n  background-color: #fff;\n}\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee;\n}\n.fc-unthemed td.fc-today {\n  background: #fcf8e3;\n}\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: 0.3;\n}\n/* Icons\n--------------------------------------------------------------------------------------------------\nfrom https://feathericons.com/ and built with IcoMoon\n*/\n@font-face {\n  font-family: \"fcicons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,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\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"fcicons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fc-icon-chevron-left:before {\n  content: \"\";\n}\n.fc-icon-chevron-right:before {\n  content: \"\";\n}\n.fc-icon-chevrons-left:before {\n  content: \"\";\n}\n.fc-icon-chevrons-right:before {\n  content: \"\";\n}\n.fc-icon-minus-square:before {\n  content: \"\";\n}\n.fc-icon-plus-square:before {\n  content: \"\";\n}\n.fc-icon-x:before {\n  content: \"\";\n}\n.fc-icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n}\n/* Buttons\n--------------------------------------------------------------------------------------------------\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n*/\n/* reset */\n.fc-button {\n  border-radius: 0;\n  overflow: visible;\n  text-transform: none;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.fc-button:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.fc-button {\n  -webkit-appearance: button;\n}\n.fc-button:not(:disabled) {\n  cursor: pointer;\n}\n.fc-button::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n/* theme */\n.fc-button {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.4em 0.65em;\n  font-size: 1em;\n  line-height: 1.5;\n  border-radius: 0.25em;\n}\n.fc-button:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.fc-button:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n}\n.fc-button:disabled {\n  opacity: 0.65;\n}\n/* \"primary\" coloring */\n.fc-button-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:hover {\n  color: #fff;\n  background-color: #1e2b37;\n  border-color: #1a252f;\n}\n.fc-button-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n.fc-button-primary:disabled {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.fc-button-primary:not(:disabled):active,\n.fc-button-primary:not(:disabled).fc-button-active {\n  color: #fff;\n  background-color: #1a252f;\n  border-color: #151e27;\n}\n.fc-button-primary:not(:disabled):active:focus,\n.fc-button-primary:not(:disabled).fc-button-active:focus {\n  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n}\n/* icons within buttons */\n.fc-button .fc-icon {\n  vertical-align: middle;\n  font-size: 1.5em;\n}\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.fc-button-group > .fc-button {\n  position: relative;\n  flex: 1 1 auto;\n}\n.fc-button-group > .fc-button:hover {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:focus,\n.fc-button-group > .fc-button:active,\n.fc-button-group > .fc-button.fc-button-active {\n  z-index: 1;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  margin-left: -1px;\n}\n.fc-button-group > .fc-button:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fc-button-group > .fc-button:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid;\n}\n/* List View\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5;\n}\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1.5em;\n}\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1.5em;\n}\n/* inner content */\n.fc-toolbar > * > :not(:first-child) {\n  margin-left: 0.75em;\n}\n.fc-toolbar h2 {\n  font-size: 1.75em;\n  margin: 0;\n}\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-view-container {\n  position: relative;\n}\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  box-sizing: content-box;\n}\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1;\n}\n@media print {\n  .fc {\n    max-width: 100% !important;\n  }\n\n  /* Global Event Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc-event {\n    background: #fff !important;\n    color: #000 !important;\n    page-break-inside: avoid;\n  }\n\n  .fc-event .fc-resizer {\n    display: none;\n  }\n\n  /* Table & Day-Row Restyling\n  --------------------------------------------------------------------------------------------------*/\n  .fc th,\n.fc td,\n.fc hr,\n.fc thead,\n.fc tbody,\n.fc-row {\n    border-color: #ccc !important;\n    background: #fff !important;\n  }\n\n  /* kill the overlaid, absolutely-positioned components */\n  /* common... */\n  .fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-mirror-skeleton,\n.fc-bgevent-container,\n.fc-business-container,\n.fc-highlight-container,\n.fc-mirror-container {\n    display: none;\n  }\n\n  /* don't force a min-height on rows (for DayGrid) */\n  .fc tbody .fc-row {\n    height: auto !important;\n    /* undo height that JS set in distributeHeight */\n    min-height: 0 !important;\n    /* undo the min-height from each view's specific stylesheet */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton {\n    position: static;\n    /* undo .fc-rigid */\n    padding-bottom: 0 !important;\n    /* use a more border-friendly method for this... */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {\n    /* only works in newer browsers */\n    padding-bottom: 1em;\n    /* ...gives space within the skeleton. also ensures min height in a way */\n  }\n\n  .fc tbody .fc-row .fc-content-skeleton table {\n    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,\n       making it look more like 3em. for other browers, it will already be this tall */\n    height: 1em;\n  }\n\n  /* Undo month-view event limiting. Display all events and hide the \"more\" links\n  --------------------------------------------------------------------------------------------------*/\n  .fc-more-cell,\n.fc-more {\n    display: none !important;\n  }\n\n  .fc tr.fc-limited {\n    display: table-row !important;\n  }\n\n  .fc td.fc-limited {\n    display: table-cell !important;\n  }\n\n  .fc-popover {\n    display: none;\n    /* never display the \"more..\" popover in print mode */\n  }\n\n  /* TimeGrid Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* undo the min-height 100% trick used to fill the container's height */\n  .fc-time-grid {\n    min-height: 0 !important;\n  }\n\n  /* don't display the side axis at all (\"all-day\" and time cells) */\n  .fc-timeGrid-view .fc-axis {\n    display: none;\n  }\n\n  /* don't display the horizontal lines */\n  .fc-slats,\n.fc-time-grid hr {\n    /* this hr is used when height is underused and needs to be filled */\n    display: none !important;\n    /* important overrides inline declaration */\n  }\n\n  /* let the container that holds the events be naturally positioned and create real height */\n  .fc-time-grid .fc-content-skeleton {\n    position: static;\n  }\n\n  /* in case there are no events, we still want some height */\n  .fc-time-grid .fc-content-skeleton table {\n    height: 4em;\n  }\n\n  /* kill the horizontal spacing made by the event container. event margins will be done below */\n  .fc-time-grid .fc-event-container {\n    margin: 0 !important;\n  }\n\n  /* TimeGrid *Event* Restyling\n  --------------------------------------------------------------------------------------------------*/\n  /* naturally position events, vertically stacking them */\n  .fc-time-grid .fc-event {\n    position: static !important;\n    margin: 3px 2px !important;\n  }\n\n  /* for events that continue to a future day, give the bottom border back */\n  .fc-time-grid .fc-event.fc-not-end {\n    border-bottom-width: 1px !important;\n  }\n\n  /* indicate the event continues via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-end:after {\n    content: \"...\";\n  }\n\n  /* for events that are continuations from previous days, give the top border back */\n  .fc-time-grid .fc-event.fc-not-start {\n    border-top-width: 1px !important;\n  }\n\n  /* indicate the event is a continuation via \"...\" text */\n  .fc-time-grid .fc-event.fc-not-start:before {\n    content: \"...\";\n  }\n\n  /* time */\n  /* undo a previous declaration and let the time text span to a second line */\n  .fc-time-grid .fc-event .fc-time {\n    white-space: normal !important;\n  }\n\n  /* hide the the time that is normally displayed... */\n  .fc-time-grid .fc-event .fc-time span {\n    display: none;\n  }\n\n  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */\n  .fc-time-grid .fc-event .fc-time:after {\n    content: attr(data-full);\n  }\n\n  /* Vertical Scroller & Containers\n  --------------------------------------------------------------------------------------------------*/\n  /* kill the scrollbars and allow natural height */\n  .fc-scroller,\n.fc-day-grid-container,\n.fc-time-grid-container {\n    /* */\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  /* kill the horizontal border/padding used to compensate for scrollbars */\n  .fc-row {\n    border: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* Button Controls\n  --------------------------------------------------------------------------------------------------*/\n  .fc-button-group,\n.fc button {\n    display: none;\n    /* don't display any button-related controls */\n  }\n}\n/* DayGridView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-dayGridWeek-view .fc-content-skeleton,\n.fc-dayGridDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */\n}\n.fc-dayGrid-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */\n}\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden;\n}\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3;\n}\n.fc-dayGrid-view .fc-week-number,\n.fc-dayGrid-view .fc-day-number {\n  padding: 2px;\n}\n.fc-dayGrid-view th.fc-week-number,\n.fc-dayGrid-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: right;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {\n  float: left;\n}\n.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0;\n}\n.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px;\n}\n.fc-dayGrid-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080;\n}\n/* when week/day number have own column */\n.fc-dayGrid-view td.fc-week-number {\n  text-align: center;\n}\n.fc-dayGrid-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em;\n}\n.fc-scroller.fc-day-grid-container {\n  height: 84vh !important;\n}\n.fc-row.fc-week.fc-widget-content {\n  height: 14vh !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMubGVzcyIsIm5vZGVfbW9kdWxlcy9AZnVsbGNhbGVuZGFyL2NvcmUvbWFpbi5jc3MiLCJub2RlX21vZHVsZXMvQGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzIiwic3JjL0M6L1VzZXJzL1RSLUxULTA1NC9EZXNrdG9wL0Jpc3dhaml0LUdhbmd1bHkvUHJvamVjdC9JbnNjYWxlL2ZsaWdodC1mYXJlL3NyYy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNBOUUsZ0JBQWdCO0FBQ2hCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjtBQUVBO21HQUNtRztBQUNuRztFQUNFLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7QUFFQTttR0FDbUc7QUFDbkc7RUFDRSxrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7bUdBQ21HO0FBQ25HO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIseURBQXlEO0VBQ3pELG1CQUFtQjtBQUNyQjtBQUVBOzs7O0VBSUUsZ0VBQWdFO0VBQ2hFLGtCQUFrQjtFQUNsQixNQUFN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QUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FDekVBO0VBQ0ksdUJBQUE7QUhBSjtBR0VBO0VBQ0ksdUJBQUE7QUhBSiIsImZpbGUiOiJzcmMvc3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+QGZ1bGxjYWxlbmRhci9jb3JlL21haW4uY3NzJztcbkBpbXBvcnQgJ35AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MnO1xuLmZjLXNjcm9sbGVyLmZjLWRheS1ncmlkLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODR2aCAhaW1wb3J0YW50O1xufVxuLmZjLXJvdy5mYy13ZWVrLmZjLXdpZGdldC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxNHZoICFpbXBvcnRhbnQ7XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG4uZmMge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZjLXJ0bCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5ib2R5IC5mYyB7XG4gIC8qIGV4dHJhIHByZWNlZGVuY2UgdG8gb3ZlcmNvbWUganF1aSAqL1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLyogQ29sb3JzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtaGlnaGxpZ2h0IHtcbiAgLyogd2hlbiB1c2VyIGlzIHNlbGVjdGluZyBjZWxscyAqL1xuICBiYWNrZ3JvdW5kOiAjYmNlOGYxO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5mYy1iZ2V2ZW50IHtcbiAgLyogZGVmYXVsdCBsb29rIGZvciBiYWNrZ3JvdW5kIGV2ZW50cyAqL1xuICBiYWNrZ3JvdW5kOiAjOGZkZjgyO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5mYy1ub25idXNpbmVzcyB7XG4gIC8qIGRlZmF1bHQgbG9vayBmb3Igbm9uLWJ1c2luZXNzLWhvdXJzIGFyZWFzICovXG4gIC8qIHdpbGwgaW5oZXJpdCAuZmMtYmdldmVudCdzIHN0eWxlcyAqL1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xufVxuXG4vKiBQb3BvdmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtcG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5mYy1wb3BvdmVyIC5mYy1oZWFkZXIge1xuICAvKiBUT0RPOiBiZSBtb3JlIGNvbnNpc3RlbnQgd2l0aCBmYy1oZWFkL2ZjLWJvZHkgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG4uZmMtcnRsIC5mYy1wb3BvdmVyIC5mYy1oZWFkZXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5mYy1wb3BvdmVyIC5mYy1oZWFkZXIgLmZjLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLmZjLXBvcG92ZXIgLmZjLWhlYWRlciAuZmMtY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi8qIE1pc2MgUmV1c2FibGUgQ29tcG9uZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLWRpdmlkZXIge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuaHIuZmMtZGl2aWRlciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMnB4O1xuICAvKiBoZWlnaHQgaXMgdW5yZWxpYWJsZSBhY3Jvc3MgYnJvd3NlcnMsIHNvIHVzZSBwYWRkaW5nICovXG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG59XG5cbi5mYy1iZyxcbi5mYy1iZ2V2ZW50LXNrZWxldG9uLFxuLmZjLWhpZ2hsaWdodC1za2VsZXRvbixcbi5mYy1taXJyb3Itc2tlbGV0b24ge1xuICAvKiB0aGVzZSBlbGVtZW50IHNob3VsZCBhbHdheXMgY2xpbmcgdG8gdG9wLWxlZnQvcmlnaHQgY29ybmVycyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5mYy1iZyB7XG4gIGJvdHRvbTogMDtcbiAgLyogc3RyZWNoIGJnIHRvIGJvdHRvbSBlZGdlICovXG59XG5cbi5mYy1iZyB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogc3RyZWNoIGJnIHRvIGJvdHRvbSBlZGdlICovXG59XG5cbi8qIFRhYmxlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIGZpeCBzY3JvbGxiYXIgaXNzdWUgaW4gZmlyZWZveCAqL1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIG5vcm1hbGl6ZSBjcm9zcy1icm93c2VyICovXG59XG5cbi5mYyB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZjIHRoLFxuLmZjIHRkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5mYyB0ZC5mYy10b2RheSB7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICAvKiBvdmVyY29tZSBuZWlnaGJvcmluZyBib3JkZXJzICovXG59XG5cbi8qIEludGVybmFsIE5hdiBMaW5rc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYVtkYXRhLWdvdG9dIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2RhdGEtZ290b106aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogRmFrZSBUYWJsZSBSb3dzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMgLmZjLXJvdyB7XG4gIC8qIGV4dHJhIHByZWNlZGVuY2UgdG8gb3ZlcmNvbWUgdGhlbWVzIGZvcmNpbmcgYSAxcHggYm9yZGVyICovXG4gIC8qIG5vIHZpc2libGUgYm9yZGVyIGJ5IGRlZmF1bHQuIGJ1dCBtYWtlIGF2YWlsYWJsZSBpZiBuZWVkIGJlIChzY3JvbGxiYXIgd2lkdGggY29tcGVuc2F0aW9uKSAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDA7XG59XG5cbi5mYy1yb3cgdGFibGUge1xuICAvKiBkb24ndCBwdXQgbGVmdC9yaWdodCBib3JkZXIgb24gYW55dGhpbmcgd2l0aGluIGEgZmFrZSByb3cuXG4gICAgIHRoZSBvdXRlciB0Ym9keSB3aWxsIHdvcnJ5IGFib3V0IHRoaXMgKi9cbiAgYm9yZGVyLWxlZnQ6IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xuICAvKiBubyBib3R0b20gYm9yZGVycyBvbiByb3dzICovXG4gIGJvcmRlci1ib3R0b206IDAgaGlkZGVuIHRyYW5zcGFyZW50O1xufVxuXG4uZmMtcm93OmZpcnN0LWNoaWxkIHRhYmxlIHtcbiAgYm9yZGVyLXRvcDogMCBoaWRkZW4gdHJhbnNwYXJlbnQ7XG4gIC8qIG5vIHRvcCBib3JkZXIgb24gZmlyc3Qgcm93ICovXG59XG5cbi8qIERheSBSb3cgKHVzZWQgd2l0aGluIHRoZSBoZWFkZXIgYW5kIHRoZSBEYXlHcmlkKVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZjLXJvdyAuZmMtYmcge1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBoaWdobGlnaHRpbmcgY2VsbHMgJiBiYWNrZ3JvdW5kIGV2ZW50IHNrZWxldG9uICovXG4uZmMtcm93IC5mYy1iZ2V2ZW50LXNrZWxldG9uLFxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHtcbiAgYm90dG9tOiAwO1xuICAvKiBzdHJldGNoIHNrZWxldG9uIHRvIGJvdHRvbSBvZiByb3cgKi9cbn1cblxuLmZjLXJvdyAuZmMtYmdldmVudC1za2VsZXRvbiB0YWJsZSxcbi5mYy1yb3cgLmZjLWhpZ2hsaWdodC1za2VsZXRvbiB0YWJsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogc3RyZXRjaCBza2VsZXRvbiB0byBib3R0b20gb2Ygcm93ICovXG59XG5cbi5mYy1yb3cgLmZjLWhpZ2hsaWdodC1za2VsZXRvbiB0ZCxcbi5mYy1yb3cgLmZjLWJnZXZlbnQtc2tlbGV0b24gdGQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZmMtcm93IC5mYy1iZ2V2ZW50LXNrZWxldG9uIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmZjLXJvdyAuZmMtaGlnaGxpZ2h0LXNrZWxldG9uIHtcbiAgei1pbmRleDogMztcbn1cblxuLypcbnJvdyBjb250ZW50ICh3aGljaCBjb250YWlucyBkYXkvd2VlayBudW1iZXJzIGFuZCBldmVudHMpIGFzIHdlbGwgYXMgXCJtaXJyb3JcIiAod2hpY2ggY29udGFpbnNcbnRlbXBvcmFyeSByZW5kZXJlZCBldmVudHMpLlxuKi9cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIC8qIG1hdGNoZXMgdGhlIHNwYWNlIGFib3ZlIHRoZSBldmVudHMgKi9cbn1cblxuLmZjLXJvdyAuZmMtbWlycm9yLXNrZWxldG9uIHtcbiAgei1pbmRleDogNTtcbn1cblxuLmZjIC5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGFibGUsXG4uZmMgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0ZCxcbi5mYyAuZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGQge1xuICAvKiBzZWUtdGhyb3VnaCB0byB0aGUgYmFja2dyb3VuZCBiZWxvdyAqL1xuICAvKiBleHRyYSBwcmVjZWRlbmNlIHRvIHByZXZlbnQgdGhlbWUtcHJvdmlkZWQgYmFja2dyb3VuZHMgKi9cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLyogaW4gY2FzZSA8dGQ+cyBhcmUgZ2xvYmFsbHkgc3R5bGVkICovXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGQsXG4uZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGQge1xuICAvKiBkb24ndCBwdXQgYSBib3JkZXIgYmV0d2VlbiBldmVudHMgYW5kL29yIHRoZSBkYXkgbnVtYmVyICovXG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGJvZHkgdGQsXG4uZmMtcm93IC5mYy1taXJyb3Itc2tlbGV0b24gdGJvZHkgdGQge1xuICAvKiBkb24ndCBwdXQgYSBib3JkZXIgYmV0d2VlbiBldmVudCBjZWxscyAqL1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4vKiBTY3JvbGxpbmcgQ29udGFpbmVyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtc2Nyb2xsZXIge1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi8qIFRPRE86IG1vdmUgdG8gdGltZWdyaWQvZGF5Z3JpZCAqL1xuLmZjLXNjcm9sbGVyID4gLmZjLWRheS1ncmlkLFxuLmZjLXNjcm9sbGVyID4gLmZjLXRpbWUtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcmUtc2NvcGUgYWxsIHBvc2l0aW9ucyAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGFjayB0byBmb3JjZSByZS1zaXppbmcgdGhpcyBpbm5lciBlbGVtZW50IHdoZW4gc2Nyb2xsYmFycyBhcHBlYXIvZGlzYXBwZWFyICovXG59XG5cbi8qIEdsb2JhbCBFdmVudCBTdHlsZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogZm9yIHJlc2l6ZSBoYW5kbGUgYW5kIG90aGVyIGlubmVyIHBvc2l0aW9uaW5nICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBtYWtlIHRoZSA8YT4gdGFnIGJsb2NrICovXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzg4ZDg7XG59XG5cbi5mYy1ldmVudCxcbi5mYy1ldmVudC1kb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4OGQ4O1xuICAvKiBkZWZhdWx0IEJBQ0tHUk9VTkQgY29sb3IgKi9cbn1cblxuLmZjLWV2ZW50LFxuLmZjLWV2ZW50OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIGRlZmF1bHQgVEVYVCBjb2xvciAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIGlmIDxhPiBoYXMgYW4gaHJlZiAqL1xufVxuXG4uZmMtZXZlbnRbaHJlZl0sXG4uZmMtZXZlbnQuZmMtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBnaXZlIGV2ZW50cyB3aXRoIGxpbmtzIGFuZCBkcmFnZ2FibGUgZXZlbnRzIGEgaGFuZCBtb3VzZSBwb2ludGVyICovXG59XG5cbi5mYy1ub3QtYWxsb3dlZCxcbi5mYy1ub3QtYWxsb3dlZCAuZmMtZXZlbnQge1xuICAvKiB0byBvdmVycmlkZSBhbiBldmVudCdzIGN1c3RvbSBjdXJzb3IgKi9cbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZjLWV2ZW50IC5mYy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiByZXNpemVyIChjdXJzb3IgQU5EIHRvdWNoIGRldmljZXMpICovXG4uZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi8qIHJlc2l6ZXIgKHRvdWNoIGRldmljZXMpICovXG4uZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmMtZXZlbnQuZmMtYWxsb3ctbW91c2UtcmVzaXplIC5mYy1yZXNpemVyLFxuLmZjLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1yZXNpemVyIHtcbiAgLyogb25seSBzaG93IHdoZW4gaG92ZXJpbmcgb3Igc2VsZWN0ZWQgKHdpdGggdG91Y2gpICovXG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBoaXQgYXJlYSAqL1xuLmZjLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1yZXNpemVyOmJlZm9yZSB7XG4gIC8qIDQweDQwIHRvdWNoIGFyZWEgKi9cbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICAvKiB1c2VyIG9mIHRoaXMgdXRpbCBjYW4gc2NvcGUgd2l0aGluIGEgbG93ZXIgei1pbmRleCAqL1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4vKiBFdmVudCBTZWxlY3Rpb24gKG9ubHkgZm9yIHRvdWNoIGRldmljZXMpXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQge1xuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG4gIC8qIG92ZXJjb21lcyBpbmxpbmUgei1pbmRleCAqL1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZmMtZXZlbnQuZmMtc2VsZWN0ZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIC8qIHNhbWUgei1pbmRleCBhcyBmYy1iZywgYmVoaW5kIHRleHQgKi9cbiAgLyogb3ZlcmNvbWUgdGhlIGJvcmRlcnMgKi9cbiAgdG9wOiAtMXB4O1xuICByaWdodDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAtMXB4O1xuICAvKiBkYXJrZW5pbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi8qIEV2ZW50IERyYWdnaW5nXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtZXZlbnQuZmMtZHJhZ2dpbmcuZmMtc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZmMtZXZlbnQuZmMtZHJhZ2dpbmc6bm90KC5mYy1zZWxlY3RlZCkge1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4vKiBIb3Jpem9udGFsIEV2ZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogYmlnZ2VyIHRvdWNoIGFyZWEgd2hlbiBzZWxlY3RlZCAqL1xuLmZjLWgtZXZlbnQuZmMtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICAvKiBiZWxvdyByZXNpemVycyAqL1xuICB0b3A6IC0xMHB4O1xuICBib3R0b206IC0xMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLyogZXZlbnRzIHRoYXQgYXJlIGNvbnRpbnVpbmcgdG8vZnJvbSBhbm90aGVyIHdlZWsuIGtpbGwgcm91bmRlZCBjb3JuZXJzIGFuZCBidXR0IHVwIGFnYWluc3QgZWRnZSAqL1xuLmZjLWx0ciAuZmMtaC1ldmVudC5mYy1ub3Qtc3RhcnQsXG4uZmMtcnRsIC5mYy1oLWV2ZW50LmZjLW5vdC1lbmQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xuICAvKiByZXBsYWNlIHRoZSBib3JkZXIgd2l0aCBwYWRkaW5nICovXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5mYy1sdHIgLmZjLWgtZXZlbnQuZmMtbm90LWVuZCxcbi5mYy1ydGwgLmZjLWgtZXZlbnQuZmMtbm90LXN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgLyogcmVwbGFjZSB0aGUgYm9yZGVyIHdpdGggcGFkZGluZyAqL1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi8qIHJlc2l6ZXIgKGN1cnNvciBBTkQgdG91Y2ggZGV2aWNlcykgKi9cbi8qIGxlZnQgcmVzaXplciAgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQgLmZjLXN0YXJ0LXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1oLWV2ZW50IC5mYy1lbmQtcmVzaXplciB7XG4gIGN1cnNvcjogdy1yZXNpemU7XG4gIGxlZnQ6IC0xcHg7XG4gIC8qIG92ZXJjb21lIGJvcmRlciAqL1xufVxuXG4vKiByaWdodCByZXNpemVyICovXG4uZmMtbHRyIC5mYy1oLWV2ZW50IC5mYy1lbmQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWgtZXZlbnQgLmZjLXN0YXJ0LXJlc2l6ZXIge1xuICBjdXJzb3I6IGUtcmVzaXplO1xuICByaWdodDogLTFweDtcbiAgLyogb3ZlcmNvbWUgYm9yZGVyICovXG59XG5cbi8qIHJlc2l6ZXIgKG1vdXNlIGRldmljZXMpICovXG4uZmMtaC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLXJlc2l6ZXIge1xuICB3aWR0aDogN3B4O1xuICB0b3A6IC0xcHg7XG4gIC8qIG92ZXJjb21lIHRvcCBib3JkZXIgKi9cbiAgYm90dG9tOiAtMXB4O1xuICAvKiBvdmVyY29tZSBib3R0b20gYm9yZGVyICovXG59XG5cbi8qIHJlc2l6ZXIgKHRvdWNoIGRldmljZXMpICovXG4uZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtcmVzaXplciB7XG4gIC8qIDh4OCBsaXR0bGUgZG90ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIHZlcnRpY2FsbHkgY2VudGVyICovXG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4vKiBsZWZ0IHJlc2l6ZXIgICovXG4uZmMtbHRyIC5mYy1oLWV2ZW50LmZjLXNlbGVjdGVkIC5mYy1zdGFydC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtZW5kLXJlc2l6ZXIge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgLyogY2VudGVycyB0aGUgOHg4IGRvdCBvbiB0aGUgbGVmdCBlZGdlICovXG59XG5cbi8qIHJpZ2h0IHJlc2l6ZXIgKi9cbi5mYy1sdHIgLmZjLWgtZXZlbnQuZmMtc2VsZWN0ZWQgLmZjLWVuZC1yZXNpemVyLFxuLmZjLXJ0bCAuZmMtaC1ldmVudC5mYy1zZWxlY3RlZCAuZmMtc3RhcnQtcmVzaXplciB7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbiAgLyogY2VudGVycyB0aGUgOHg4IGRvdCBvbiB0aGUgcmlnaHQgZWRnZSAqL1xufVxuXG4vKiBEYXlHcmlkIGV2ZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuV2UgdXNlIHRoZSBmdWxsIFwiZmMtZGF5LWdyaWQtZXZlbnRcIiBjbGFzcyBpbnN0ZWFkIG9mIHVzaW5nIGRlc2NlbmRhbnRzIGJlY2F1c2UgdGhlIGV2ZW50IHdvbid0XG5iZSBhIGRlc2NlbmRhbnQgb2YgdGhlIGdyaWQgd2hlbiBpdCBpcyBiZWluZyBkcmFnZ2VkLlxuKi9cbi5mYy1kYXktZ3JpZC1ldmVudCB7XG4gIG1hcmdpbjogMXB4IDJweCAwO1xuICAvKiBzcGFjaW5nIGJldHdlZW4gZXZlbnRzIGFuZCBlZGdlcyAqL1xuICBwYWRkaW5nOiAwIDFweDtcbn1cblxudHI6Zmlyc3QtY2hpbGQgPiB0ZCA+IC5mYy1kYXktZ3JpZC1ldmVudCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgLyogYSBsaXR0bGUgYml0IG1vcmUgc3BhY2UgYmVmb3JlIHRoZSBmaXJzdCBldmVudCAqL1xufVxuXG4uZmMtbWlycm9yLXNrZWxldG9uIHRyOmZpcnN0LWNoaWxkID4gdGQgPiAuZmMtZGF5LWdyaWQtZXZlbnQge1xuICBtYXJnaW4tdG9wOiAwO1xuICAvKiBleGNlcHQgZm9yIG1pcnJvciBza2VsZXRvbiAqL1xufVxuXG4uZmMtZGF5LWdyaWQtZXZlbnQgLmZjLWNvbnRlbnQge1xuICAvKiBmb3JjZSBldmVudHMgdG8gYmUgb25lLWxpbmUgdGFsbCAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmMtZGF5LWdyaWQtZXZlbnQgLmZjLXRpbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogcmVzaXplciAoY3Vyc29yIGRldmljZXMpICovXG4vKiBsZWZ0IHJlc2l6ZXIgICovXG4uZmMtbHRyIC5mYy1kYXktZ3JpZC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLXN0YXJ0LXJlc2l6ZXIsXG4uZmMtcnRsIC5mYy1kYXktZ3JpZC1ldmVudC5mYy1hbGxvdy1tb3VzZS1yZXNpemUgLmZjLWVuZC1yZXNpemVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIC8qIHRvIHRoZSBkYXkgY2VsbCdzIGVkZ2UgKi9cbn1cblxuLyogcmlnaHQgcmVzaXplciAqL1xuLmZjLWx0ciAuZmMtZGF5LWdyaWQtZXZlbnQuZmMtYWxsb3ctbW91c2UtcmVzaXplIC5mYy1lbmQtcmVzaXplcixcbi5mYy1ydGwgLmZjLWRheS1ncmlkLWV2ZW50LmZjLWFsbG93LW1vdXNlLXJlc2l6ZSAuZmMtc3RhcnQtcmVzaXplciB7XG4gIG1hcmdpbi1yaWdodDogLTJweDtcbiAgLyogdG8gdGhlIGRheSBjZWxsJ3MgZWRnZSAqL1xufVxuXG4vKiBFdmVudCBMaW1pdGluZ1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogXCJtb3JlXCIgbGluayB0aGF0IHJlcHJlc2VudHMgaGlkZGVuIGV2ZW50cyAqL1xuYS5mYy1tb3JlIHtcbiAgbWFyZ2luOiAxcHggM3B4O1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEuZmMtbW9yZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZmMtbGltaXRlZCB7XG4gIC8qIHJvd3MgYW5kIGNlbGxzIHRoYXQgYXJlIGhpZGRlbiBiZWNhdXNlIG9mIGEgXCJtb3JlXCIgbGluayAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBwb3BvdmVyIHRoYXQgYXBwZWFycyB3aGVuIFwibW9yZVwiIGxpbmsgaXMgY2xpY2tlZCAqL1xuLmZjLWRheS1ncmlkIC5mYy1yb3cge1xuICB6LWluZGV4OiAxO1xuICAvKiBtYWtlIHRoZSBcIm1vcmVcIiBwb3BvdmVyIG9uZSBoaWdoZXIgdGhhbiB0aGlzICovXG59XG5cbi5mYy1tb3JlLXBvcG92ZXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjIwcHg7XG59XG5cbi5mYy1tb3JlLXBvcG92ZXIgLmZjLWV2ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIE5vdyBJbmRpY2F0b3Jcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy1ub3ctaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDAgc29saWQgcmVkO1xufVxuXG4vKiBVdGlsaXRpZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mYy11bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vKlxuVE9ETzogbW9yZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIHRoaXMgZmlsZSBhbmQgY29tbW9uLmNzc1xuKi9cbi8qIENvbG9yc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIHRoLFxuLmZjLXVudGhlbWVkIHRkLFxuLmZjLXVudGhlbWVkIHRoZWFkLFxuLmZjLXVudGhlbWVkIHRib2R5LFxuLmZjLXVudGhlbWVkIC5mYy1kaXZpZGVyLFxuLmZjLXVudGhlbWVkIC5mYy1yb3csXG4uZmMtdW50aGVtZWQgLmZjLWNvbnRlbnQsXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIsXG4uZmMtdW50aGVtZWQgLmZjLWxpc3Qtdmlldyxcbi5mYy11bnRoZW1lZCAuZmMtbGlzdC1oZWFkaW5nIHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZmMtdW50aGVtZWQgLmZjLWRpdmlkZXIsXG4uZmMtdW50aGVtZWQgLmZjLXBvcG92ZXIgLmZjLWhlYWRlcixcbi5mYy11bnRoZW1lZCAuZmMtbGlzdC1oZWFkaW5nIHRkIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmZjLXVudGhlbWVkIHRkLmZjLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogI2ZjZjhlMztcbn1cblxuLmZjLXVudGhlbWVkIC5mYy1kaXNhYmxlZC1kYXkge1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi8qIEljb25zXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnJvbSBodHRwczovL2ZlYXRoZXJpY29ucy5jb20vIGFuZCBidWlsdCB3aXRoIEljb01vb25cbiovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZmNpY29uc1wiO1xuICBzcmM6IHVybChcImRhdGE6YXBwbGljYXRpb24veC1mb250LXR0ZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBTEFJQUFBd0F3VDFNdk1nOFNCZkFBQUFDOEFBQUFZR050WVhBWFZ0S05BQUFCSEFBQUFGUm5ZWE53QUFBQUVBQUFBWEFBQUFBSVoyeDVaZ1l5ZHhJQUFBRjRBQUFGTkdobFlXUVVKN2NJQUFBR3JBQUFBRFpvYUdWaEIyMER6QUFBQnVRQUFBQWthRzEwZUNJQUJoUUFBQWNJQUFBQUxHeHZZMkVENEFVNkFBQUhOQUFBQUJodFlYaHdBQThBakFBQUIwd0FBQUFnYm1GdFpYc3I2OTBBQUFkc0FBQUJobkJ2YzNRQUF3QUFBQUFJOUFBQUFDQUFBd1BBQVpBQUJRQUFBcGtDekFBQUFJOENtUUxNQUFBQjZ3QXpBUWtBQUFBQUFBQUFBQUFBQUFBQUFBQUJFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQURwQmdQQS84QUFRQVBBQUVBQUFBQUJBQUFBQUFBQUFBQUFBQUFnQUFBQUFBQURBQUFBQXdBQUFCd0FBUUFEQUFBQUhBQURBQUVBQUFBY0FBUUFPQUFBQUFvQUNBQUNBQUlBQVFBZzZRYi8vZi8vQUFBQUFBQWc2UUQvL2YvL0FBSC80eGNFQUFNQUFRQUFBQUFBQUFBQUFBQUFBUUFCLy84QUR3QUJBQUFBQUFBQUFBQUFBZ0FBTnprQkFBQUFBQUVBQUFBQUFBQUFBQUFDQUFBM09RRUFBQUFBQVFBQUFBQUFBQUFBQUFJQUFEYzVBUUFBQUFBQkFXSUFqUUtlQXNrQUV3QUFKU2MzTmpRbkppSUhBUVlVRndFV01qYzJOQ2NDbnVMaURRME1KQXovQUEwTkFRQU1KQXdORGNuaTRnd2pEUXdNL3dBTkl3ei9BQTBORENNTkFBQUFBUUZpQUkwQ25nTEpBQk1BQUNVQk5qUW5BU1lpQndZVUh3RUhCaFFYRmpJM0FaNEJBQTBOL3dBTUpBd05EZUxpRFEwTUpBeU5BUUFNSXcwQkFBd01EU01NNHVJTkl3d05EUUFBQUFJQTRnQzNBeDRDbmdBVEFDY0FBQ1VuTnpZMEp5WWlEd0VHRkI4QkZqSTNOalFuSVNjM05qUW5KaUlQQVFZVUh3RVdNamMyTkNjQjg3ZTNEUTBNSXczVkRRM1ZEU01NRFEwQks3ZTNEUTBNSkF6VkRRM1ZEQ1FNRFEzenVMY01KQXdORGRVTkl3eldEQXdOSXd5NHR3d2tEQTBOMVEwakROWU1EQTBqREFBQUFnRGlBTGNESGdLZUFCTUFKd0FBSlRjMk5DOEJKaUlIQmhRZkFRY0dGQmNXTWpjaE56WTBMd0VtSWdjR0ZCOEJCd1lVRnhZeU53SkoxUTBOMVEwakRBME50N2NORFF3akRmN1YxUTBOMVF3a0RBME50N2NORFF3a0RMZldEQ01OMVEwTkRDUU10N2dNSXcwTUROWU1JdzNWRFEwTUpBeTN1QXdqRFF3TUFBQURBRlVBQUFPckExVUFNd0JvQUhjQUFCTWlCZ2NPQVFjT0FRY09BUlVSRkJZWEhnRVhIZ0VYSGdFeklUSTJOejRCTno0Qk56NEJOUkUwSmljdUFTY3VBU2N1QVNNRklUSVdGeDRCRng0QkZ4NEJGUkVVQmdjT0FRY09BUWNPQVNNaElpWW5MZ0VuTGdFbkxnRTFFVFEyTno0Qk56NEJOejRCTXhNaE1qWTFOQ1lqSVNJR0ZSUVdNOVVOR0F3TEZRa0pEZ1VGQlFVRkJRNEpDUlVMREJnTkFsWU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOL2FvQ1ZnUUlCQVFIQXdNRkFRSUJBUUlCQlFNREJ3UUVDQVQ5cWdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBU0FBVllSR1JrUi9xb1JHUmtSQTFVRkJBVU9DUWtWREFzWkRmMnJEUmtMREJVSkNBNEZCUVVGQlFVT0NRZ1ZEQXNaRFFKVkRSa0xEQlVKQ1E0RkJBVlZBZ0VDQlFNQ0J3UUVDQVg5cXdRSkF3UUhBd01GQVFJQ0FnSUJCUU1EQndRRENRUUNWUVVJQkFRSEFnTUZBZ0VDL29BWkVoRVpHUkVTR1FBQUFBQURBRlVBQUFPckExVUFNd0JvQUlrQUFCTWlCZ2NPQVFjT0FRY09BUlVSRkJZWEhnRVhIZ0VYSGdFeklUSTJOejRCTno0Qk56NEJOUkUwSmljdUFTY3VBU2N1QVNNRklUSVdGeDRCRng0QkZ4NEJGUkVVQmdjT0FRY09BUWNPQVNNaElpWW5MZ0VuTGdFbkxnRTFFVFEyTno0Qk56NEJOejRCTXhNekZSUVdNekkyUFFFek1qWTFOQ1lyQVRVMEppTWlCaDBCSXlJR0ZSUVdNOVVOR0F3TEZRa0pEZ1VGQlFVRkJRNEpDUlVMREJnTkFsWU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOL2FvQ1ZnUUlCQVFIQXdNRkFRSUJBUUlCQlFNREJ3UUVDQVQ5cWdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBU0FnQmtTRWhtQUVSa1pFWUFaRWhJWmdCRVpHUkVEVlFVRUJRNEpDUlVNQ3hrTi9hc05HUXNNRlFrSURnVUZCUVVGQlE0SkNCVU1DeGtOQWxVTkdRc01GUWtKRGdVRUJWVUNBUUlGQXdJSEJBUUlCZjJyQkFrREJBY0RBd1VCQWdJQ0FnRUZBd01IQkFNSkJBSlZCUWdFQkFjQ0F3VUNBUUwrZ0lBU0dSa1NnQmtTRVJtQUVoa1pFb0FaRVJJWkFBQUJBT0lBalFNZUFza0FJQUFBRXhjSEJoUVhGakkvQVJjV01qYzJOQzhCTnpZMEp5WWlEd0VuSmlJSEJoUVg0dUxpRFEwTUpBemk0Z3drREEwTjR1SU5EUXdrRE9MaURDUU1EUTBDamVMaURTTU1EUTNoNFEwTkRDTU40dUlNSXcwTURPTGlEQXdOSXd3QUFBQUJBQUFBQVFBQWE1bjB5MThQUFBVQUN3UUFBQUFBQU5pdk9Wc0FBQUFBMks4NVd3QUFBQUFEcXdOVkFBQUFDQUFDQUFBQUFBQUFBQUVBQUFQQS84QUFBQVFBQUFBQUFBT3JBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUxCQUFBQUFBQUFBQUFBQUFBQWdBQUFBUUFBV0lFQUFGaUJBQUE0Z1FBQU9JRUFBQlZCQUFBVlFRQUFPSUFBQUFBQUFvQUZBQWVBRVFBYWdDcUFPb0JuZ0prQXBvQUFRQUFBQXNBaWdBREFBQUFBQUFDQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE0QXJnQUJBQUFBQUFBQkFBY0FBQUFCQUFBQUFBQUNBQWNBWUFBQkFBQUFBQUFEQUFjQU5nQUJBQUFBQUFBRUFBY0FkUUFCQUFBQUFBQUZBQXNBRlFBQkFBQUFBQUFHQUFjQVN3QUJBQUFBQUFBS0FCb0FpZ0FEQUFFRUNRQUJBQTRBQndBREFBRUVDUUFDQUE0QVp3QURBQUVFQ1FBREFBNEFQUUFEQUFFRUNRQUVBQTRBZkFBREFBRUVDUUFGQUJZQUlBQURBQUVFQ1FBR0FBNEFVZ0FEQUFFRUNRQUtBRFFBcEdaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMxWmxjbk5wYjI0Z01TNHdBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUdaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMyWmphV052Ym5NQVpnQmpBR2tBWXdCdkFHNEFjMUpsWjNWc1lYSUFVZ0JsQUdjQWRRQnNBR0VBY21aamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMwWnZiblFnWjJWdVpYSmhkR1ZrSUdKNUlFbGpiMDF2YjI0dUFFWUFid0J1QUhRQUlBQm5BR1VBYmdCbEFISUFZUUIwQUdVQVpBQWdBR0lBZVFBZ0FFa0FZd0J2QUUwQWJ3QnZBRzRBTGdBQUFBTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9XCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uZmMtaWNvbiB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImZjaWNvbnNcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5mYy1pY29uLWNoZXZyb24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uZmMtaWNvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5mYy1pY29uLWNoZXZyb25zLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmZjLWljb24tY2hldnJvbnMtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupINcIjtcbn1cblxuLmZjLWljb24tbWludXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSEXCI7XG59XG5cbi5mYy1pY29uLXBsdXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSFXCI7XG59XG5cbi5mYy1pY29uLXg6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIZcIjtcbn1cblxuLmZjLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEJ1dHRvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Mb3RzIHRha2VuIGZyb20gRmxhdGx5IChNSVQpOiBodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZmxhdGx5L2Jvb3RzdHJhcC5jc3NcbiovXG4vKiByZXNldCAqL1xuLmZjLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmZjLWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbn1cblxuLmZjLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4uZmMtYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmMtYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiB0aGVtZSAqL1xuLmZjLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjRlbSAwLjY1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG59XG5cbi5mYy1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmMtYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0NCwgNjIsIDgwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDQsIDYyLCA4MCwgMC4yNSk7XG59XG5cbi5mYy1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4vKiBcInByaW1hcnlcIiBjb2xvcmluZyAqL1xuLmZjLWJ1dHRvbi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XG4gIGJvcmRlci1jb2xvcjogIzJDM0U1MDtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTJiMzc7XG4gIGJvcmRlci1jb2xvcjogIzFhMjUyZjtcbn1cblxuLmZjLWJ1dHRvbi1wcmltYXJ5OmZvY3VzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg3NiwgOTEsIDEwNiwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzRTUwO1xuICBib3JkZXItY29sb3I6ICMyQzNFNTA7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKTphY3RpdmUsXG4uZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCkuZmMtYnV0dG9uLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNTJmO1xuICBib3JkZXItY29sb3I6ICMxNTFlMjc7XG59XG5cbi5mYy1idXR0b24tcHJpbWFyeTpub3QoOmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXG4uZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCkuZmMtYnV0dG9uLWFjdGl2ZTpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc2LCA5MSwgMTA2LCAwLjUpO1xufVxuXG4vKiBpY29ucyB3aXRoaW4gYnV0dG9ucyAqL1xuLmZjLWJ1dHRvbiAuZmMtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi8qIEJ1dHRvbnMgR3JvdXBzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtYnV0dG9uLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjpob3ZlciB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOmZvY3VzLFxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246YWN0aXZlLFxuLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b24uZmMtYnV0dG9uLWFjdGl2ZSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLyogUG9wb3ZlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIC5mYy1wb3BvdmVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi8qIExpc3QgVmlld1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXVudGhlbWVkIC5mYy1saXN0LWl0ZW06aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4vKiBUb29sYmFyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZmMtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZjLXRvb2xiYXIuZmMtaGVhZGVyLXRvb2xiYXIge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cblxuLmZjLXRvb2xiYXIuZmMtZm9vdGVyLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cblxuLyogaW5uZXIgY29udGVudCAqL1xuLmZjLXRvb2xiYXIgPiAqID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbn1cblxuLmZjLXRvb2xiYXIgaDIge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBWaWV3IFN0cnVjdHVyZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmZjLXZpZXctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiB1bmRvIHR3aXR0ZXIgYm9vdHN0cmFwJ3MgYm94LXNpemluZyBydWxlcy4gbm9ybWFsaXplcyBwb3NpdGlvbmluZyB0ZWNobmlxdWVzICovXG4vKiBkb24ndCBkbyB0aGlzIGZvciB0aGUgdG9vbGJhciBiZWNhdXNlIHdlJ2xsIHdhbnQgYm9vdHN0cmFwIHRvIHN0eWxlIHRob3NlIGJ1dHRvbnMgYXMgc29tZSBwdCAqL1xuLmZjLXZpZXctY29udGFpbmVyICosXG4uZmMtdmlldy1jb250YWluZXIgKjpiZWZvcmUsXG4uZmMtdmlldy1jb250YWluZXIgKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uZmMtdmlldyxcbi5mYy12aWV3ID4gdGFibGUge1xuICAvKiBzbyBkcmFnZ2VkIGVsZW1lbnRzIGNhbiBiZSBhYm92ZSB0aGUgdmlldydzIG1haW4gZWxlbWVudCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5mYyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBHbG9iYWwgRXZlbnQgUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICAuZmMtZXZlbnQgLmZjLXJlc2l6ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBUYWJsZSAmIERheS1Sb3cgUmVzdHlsaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjIHRoLFxuLmZjIHRkLFxuLmZjIGhyLFxuLmZjIHRoZWFkLFxuLmZjIHRib2R5LFxuLmZjLXJvdyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyoga2lsbCB0aGUgb3ZlcmxhaWQsIGFic29sdXRlbHktcG9zaXRpb25lZCBjb21wb25lbnRzICovXG4gIC8qIGNvbW1vbi4uLiAqL1xuICAuZmMtYmcsXG4uZmMtYmdldmVudC1za2VsZXRvbixcbi5mYy1oaWdobGlnaHQtc2tlbGV0b24sXG4uZmMtbWlycm9yLXNrZWxldG9uLFxuLmZjLWJnZXZlbnQtY29udGFpbmVyLFxuLmZjLWJ1c2luZXNzLWNvbnRhaW5lcixcbi5mYy1oaWdobGlnaHQtY29udGFpbmVyLFxuLmZjLW1pcnJvci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkb24ndCBmb3JjZSBhIG1pbi1oZWlnaHQgb24gcm93cyAoZm9yIERheUdyaWQpICovXG4gIC5mYyB0Ym9keSAuZmMtcm93IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAvKiB1bmRvIGhlaWdodCB0aGF0IEpTIHNldCBpbiBkaXN0cmlidXRlSGVpZ2h0ICovXG4gICAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIC8qIHVuZG8gdGhlIG1pbi1oZWlnaHQgZnJvbSBlYWNoIHZpZXcncyBzcGVjaWZpYyBzdHlsZXNoZWV0ICovXG4gIH1cblxuICAuZmMgdGJvZHkgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAvKiB1bmRvIC5mYy1yaWdpZCAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgLyogdXNlIGEgbW9yZSBib3JkZXItZnJpZW5kbHkgbWV0aG9kIGZvciB0aGlzLi4uICovXG4gIH1cblxuICAuZmMgdGJvZHkgLmZjLXJvdyAuZmMtY29udGVudC1za2VsZXRvbiB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICAvKiBvbmx5IHdvcmtzIGluIG5ld2VyIGJyb3dzZXJzICovXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAvKiAuLi5naXZlcyBzcGFjZSB3aXRoaW4gdGhlIHNrZWxldG9uLiBhbHNvIGVuc3VyZXMgbWluIGhlaWdodCBpbiBhIHdheSAqL1xuICB9XG5cbiAgLmZjIHRib2R5IC5mYy1yb3cgLmZjLWNvbnRlbnQtc2tlbGV0b24gdGFibGUge1xuICAgIC8qIHByb3ZpZGVzIGEgbWluLWhlaWdodCBmb3IgdGhlIHJvdywgYnV0IG9ubHkgZWZmZWN0aXZlIGZvciBJRSwgd2hpY2ggZXhhZ2dlcmF0ZXMgdGhpcyB2YWx1ZSxcbiAgICAgICBtYWtpbmcgaXQgbG9vayBtb3JlIGxpa2UgM2VtLiBmb3Igb3RoZXIgYnJvd2VycywgaXQgd2lsbCBhbHJlYWR5IGJlIHRoaXMgdGFsbCAqL1xuICAgIGhlaWdodDogMWVtO1xuICB9XG5cbiAgLyogVW5kbyBtb250aC12aWV3IGV2ZW50IGxpbWl0aW5nLiBEaXNwbGF5IGFsbCBldmVudHMgYW5kIGhpZGUgdGhlIFwibW9yZVwiIGxpbmtzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmZjLW1vcmUtY2VsbCxcbi5mYy1tb3JlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmMgdHIuZmMtbGltaXRlZCB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmMgdGQuZmMtbGltaXRlZCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZjLXBvcG92ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLyogbmV2ZXIgZGlzcGxheSB0aGUgXCJtb3JlLi5cIiBwb3BvdmVyIGluIHByaW50IG1vZGUgKi9cbiAgfVxuXG4gIC8qIFRpbWVHcmlkIFJlc3R5bGluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIHVuZG8gdGhlIG1pbi1oZWlnaHQgMTAwJSB0cmljayB1c2VkIHRvIGZpbGwgdGhlIGNvbnRhaW5lcidzIGhlaWdodCAqL1xuICAuZmMtdGltZS1ncmlkIHtcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBkb24ndCBkaXNwbGF5IHRoZSBzaWRlIGF4aXMgYXQgYWxsIChcImFsbC1kYXlcIiBhbmQgdGltZSBjZWxscykgKi9cbiAgLmZjLXRpbWVHcmlkLXZpZXcgLmZjLWF4aXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkb24ndCBkaXNwbGF5IHRoZSBob3Jpem9udGFsIGxpbmVzICovXG4gIC5mYy1zbGF0cyxcbi5mYy10aW1lLWdyaWQgaHIge1xuICAgIC8qIHRoaXMgaHIgaXMgdXNlZCB3aGVuIGhlaWdodCBpcyB1bmRlcnVzZWQgYW5kIG5lZWRzIHRvIGJlIGZpbGxlZCAqL1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAvKiBpbXBvcnRhbnQgb3ZlcnJpZGVzIGlubGluZSBkZWNsYXJhdGlvbiAqL1xuICB9XG5cbiAgLyogbGV0IHRoZSBjb250YWluZXIgdGhhdCBob2xkcyB0aGUgZXZlbnRzIGJlIG5hdHVyYWxseSBwb3NpdGlvbmVkIGFuZCBjcmVhdGUgcmVhbCBoZWlnaHQgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gIC8qIGluIGNhc2UgdGhlcmUgYXJlIG5vIGV2ZW50cywgd2Ugc3RpbGwgd2FudCBzb21lIGhlaWdodCAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1jb250ZW50LXNrZWxldG9uIHRhYmxlIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxuXG4gIC8qIGtpbGwgdGhlIGhvcml6b250YWwgc3BhY2luZyBtYWRlIGJ5IHRoZSBldmVudCBjb250YWluZXIuIGV2ZW50IG1hcmdpbnMgd2lsbCBiZSBkb25lIGJlbG93ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBUaW1lR3JpZCAqRXZlbnQqIFJlc3R5bGluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIG5hdHVyYWxseSBwb3NpdGlvbiBldmVudHMsIHZlcnRpY2FsbHkgc3RhY2tpbmcgdGhlbSAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudCB7XG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4IDJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogZm9yIGV2ZW50cyB0aGF0IGNvbnRpbnVlIHRvIGEgZnV0dXJlIGRheSwgZ2l2ZSB0aGUgYm90dG9tIGJvcmRlciBiYWNrICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1lbmQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogaW5kaWNhdGUgdGhlIGV2ZW50IGNvbnRpbnVlcyB2aWEgXCIuLi5cIiB0ZXh0ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1lbmQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiLi4uXCI7XG4gIH1cblxuICAvKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGNvbnRpbnVhdGlvbnMgZnJvbSBwcmV2aW91cyBkYXlzLCBnaXZlIHRoZSB0b3AgYm9yZGVyIGJhY2sgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQuZmMtbm90LXN0YXJ0IHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIGluZGljYXRlIHRoZSBldmVudCBpcyBhIGNvbnRpbnVhdGlvbiB2aWEgXCIuLi5cIiB0ZXh0ICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50LmZjLW5vdC1zdGFydDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLi4uXCI7XG4gIH1cblxuICAvKiB0aW1lICovXG4gIC8qIHVuZG8gYSBwcmV2aW91cyBkZWNsYXJhdGlvbiBhbmQgbGV0IHRoZSB0aW1lIHRleHQgc3BhbiB0byBhIHNlY29uZCBsaW5lICovXG4gIC5mYy10aW1lLWdyaWQgLmZjLWV2ZW50IC5mYy10aW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBoaWRlIHRoZSB0aGUgdGltZSB0aGF0IGlzIG5vcm1hbGx5IGRpc3BsYXllZC4uLiAqL1xuICAuZmMtdGltZS1ncmlkIC5mYy1ldmVudCAuZmMtdGltZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLyogLi4ucmVwbGFjZSBpdCB3aXRoIGEgbW9yZSB2ZXJib3NlIHZlcnNpb24gKGluY2x1ZGVzIEFNL1BNKSBzdG9yZWQgaW4gYW4gaHRtbCBhdHRyaWJ1dGUgKi9cbiAgLmZjLXRpbWUtZ3JpZCAuZmMtZXZlbnQgLmZjLXRpbWU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1mdWxsKTtcbiAgfVxuXG4gIC8qIFZlcnRpY2FsIFNjcm9sbGVyICYgQ29udGFpbmVyc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIC8qIGtpbGwgdGhlIHNjcm9sbGJhcnMgYW5kIGFsbG93IG5hdHVyYWwgaGVpZ2h0ICovXG4gIC5mYy1zY3JvbGxlcixcbi5mYy1kYXktZ3JpZC1jb250YWluZXIsXG4uZmMtdGltZS1ncmlkLWNvbnRhaW5lciB7XG4gICAgLyogKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyoga2lsbCB0aGUgaG9yaXpvbnRhbCBib3JkZXIvcGFkZGluZyB1c2VkIHRvIGNvbXBlbnNhdGUgZm9yIHNjcm9sbGJhcnMgKi9cbiAgLmZjLXJvdyB7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBCdXR0b24gQ29udHJvbHNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAuZmMtYnV0dG9uLWdyb3VwLFxuLmZjIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBkb24ndCBkaXNwbGF5IGFueSBidXR0b24tcmVsYXRlZCBjb250cm9scyAqL1xuICB9XG59XG4iLCIvKiBEYXlHcmlkVmlld1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogZGF5IHJvdyBzdHJ1Y3R1cmUgKi9cbi5mYy1kYXlHcmlkV2Vlay12aWV3IC5mYy1jb250ZW50LXNrZWxldG9uLFxuLmZjLWRheUdyaWREYXktdmlldyAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gIC8qIHRoZXJlIG1heSBiZSB3ZWVrIG51bWJlcnMgaW4gdGhlc2Ugdmlld3MsIHNvIG5vIHBhZGRpbmctdG9wICovXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIC8qIGVuc3VyZSBhIHNwYWNlIGF0IGJvdHRvbSBvZiBjZWxsIGZvciB1c2VyIHNlbGVjdGluZy9jbGlja2luZyAqL1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IC5mYy1ib2R5IC5mYy1yb3cge1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIC8qIGVuc3VyZSB0aGF0IGFsbCByb3dzIGFyZSBhdCBsZWFzdCB0aGlzIHRhbGwgKi9cbn1cblxuLyogYSBcInJpZ2lkXCIgcm93IHdpbGwgdGFrZSB1cCBhIGNvbnN0YW50IGFtb3VudCBvZiBoZWlnaHQgYmVjYXVzZSBjb250ZW50LXNrZWxldG9uIGlzIGFic29sdXRlICovXG4uZmMtcm93LmZjLXJpZ2lkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZjLXJvdy5mYy1yaWdpZCAuZmMtY29udGVudC1za2VsZXRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLyogd2VlayBhbmQgZGF5IG51bWJlciBzdHlsaW5nICovXG4uZmMtZGF5LXRvcC5mYy1vdGhlci1tb250aCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmZjLWRheUdyaWQtdmlldyAuZmMtd2Vlay1udW1iZXIsXG4uZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktbnVtYmVyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IHRoLmZjLXdlZWstbnVtYmVyLFxuLmZjLWRheUdyaWQtdmlldyB0aC5mYy1kYXktbnVtYmVyIHtcbiAgcGFkZGluZzogMCAycHg7XG4gIC8qIGNvbHVtbiBoZWFkZXJzIGNhbid0IGhhdmUgYXMgbXVjaCB2IHNwYWNlICovXG59XG5cbi5mYy1sdHIgLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtZGF5LW51bWJlciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZjLXJ0bCAuZmMtZGF5R3JpZC12aWV3IC5mYy1kYXktdG9wIC5mYy1kYXktbnVtYmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mYy1sdHIgLmZjLWRheUdyaWQtdmlldyAuZmMtZGF5LXRvcCAuZmMtd2Vlay1udW1iZXIge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAwO1xufVxuXG4uZmMtcnRsIC5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS10b3AgLmZjLXdlZWstbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XG59XG5cbi5mYy1kYXlHcmlkLXZpZXcgLmZjLWRheS10b3AgLmZjLXdlZWstbnVtYmVyIHtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuLyogd2hlbiB3ZWVrL2RheSBudW1iZXIgaGF2ZSBvd24gY29sdW1uICovXG4uZmMtZGF5R3JpZC12aWV3IHRkLmZjLXdlZWstbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmMtZGF5R3JpZC12aWV3IHRkLmZjLXdlZWstbnVtYmVyID4gKiB7XG4gIC8qIHdvcmsgYXJvdW5kIHRoZSB3YXkgd2UgZG8gY29sdW1uIHJlc2l6aW5nIGFuZCBlbnN1cmUgYSBtaW5pbXVtIHdpZHRoICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxLjI1ZW07XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+QGZ1bGxjYWxlbmRhci9jb3JlL21haW4uY3NzJztcbkBpbXBvcnQgJ35AZnVsbGNhbGVuZGFyL2RheWdyaWQvbWFpbi5jc3MnO1xuXG4uZmMtc2Nyb2xsZXIuZmMtZGF5LWdyaWQtY29udGFpbmVye1xuICAgIGhlaWdodDogODR2aCAhaW1wb3J0YW50O1xufVxuLmZjLXJvdy5mYy13ZWVrLmZjLXdpZGdldC1jb250ZW50e1xuICAgIGhlaWdodDogMTR2aCAhaW1wb3J0YW50O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--16-3!./styles.less */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\TR-LT-054\Desktop\Biswajit-Ganguly\Project\Inscale\flight-fare\src\styles.less */"./src/styles.less");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map