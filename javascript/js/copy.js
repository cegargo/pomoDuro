/**
 * Copyright (c) cegargo
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function get_year() {
  var date = new Date();
  return date.getFullYear();
}

document.getElementById("year").innerHTML = "&copy; " + get_year().toString();
