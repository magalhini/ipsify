/**
 * Ipsify.js - generate Lorem Ipsum paragraphs with simple placeholders.
 *
 * @author  Ricardo Magalhaes
 * @web     www.ricardofilipe.com
 * @version 0.1
 *
 * @github https://github.com/ipsify/ipsify.js
 *
 * @license
 *     This program is free software. It comes without any warranty, to
 *     the extent permitted by applicable law. You can redistribute it
 *     and/or modify it under the terms of the Do What The Fuck You Want
 *     To Public License, Version 2, as published by Sam Hocevar. See
 *     http://sam.zoy.org/wtfpl/COPYING for more details.
 *
 */

(function (exports, doc) {

    function Ipsify(options) {
        this._slug = typeof options != 'undefined' && options.slug || /^{li(\d)}/;
    }

    Ipsify.prototype = {

        /**
         * Public initializer.
         *
         * @return {Ipsify}
         */
        fill: function () {
            this._findNodes(function (nodes) {
                this._fillNodes(nodes);
            }.bind(this));

            return this;
        },

        /**
         * Finds the nodes to fill.
         *
         * @param {Function} [fillCallback] The callback to run if placeholders are found.
         * @return {}
         */
        _findNodes: function (fillCallback) {
          var i     = 0,
              lng   = 0,
              reg   = new RegExp(this._slug),
              parag = 0,
              node,
              nodes;

          this._nodes  = doc.body.querySelectorAll('*');
          lng = this._nodes.length;

          for (i; i < lng; i += 1) {
              node = this._nodes[i];
              var match = node.innerHTML.match(reg);

              if (match) {
                  nodes = nodes || {};
                  parag = match[1]; // get number of paragraphs
                  nodes[parag] = [node];
              }
          }

          if (nodes) {
              fillCallback(nodes);
          } else {
              console.log('No Ipsify placeholders found.');
          }
        },

        /**
         * Fills the nodes with text.
         *
         * @param  {Object} nodes
         * @return {}
         */
        _fillNodes: function (nodes) {
            for (var k in nodes) {
                nodes[k][0].innerHTML = this._generateText(k);
            }
        },

        /**
         * Generates paragraphs of lorem ipsum.
         *
         * @param  {Number} The number of paragraphs to return.
         * @return {String}
         */
        _generateText: function (p) {
            var lorem = ['<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget\n\
                dignissim tellus, in adipiscing felis. Suspendisse dui lorem, aliquam hendrerit vehicula vel, \n\
                interdum ut felis. Phasellus vel massa eros. Suspendisse dapibus pretium nisl. Proin tempor ante \n\
                libero, vitae porttitor urna faucibus interdum. Vivamus ultrices lobortis nisi quis semper. \n\
                Curabitur turpis dui, elementum quis interdum nec, interdum quis massa. Cras eu sagittis erat. \n\
                Maecenas et purus quis lectus rhoncus pellentesque. Nulla volutpat eu sapien et feugiat. Phasellus \n\
                consectetur nisi a erat condimentum bibendum eget eget lacus. Pellentesque vehicula augue nec \n\
                dolor mattis dignissim. Mauris pretium ipsum orci, et iaculis risus bibendum at.</p>', '<p>Duis malesuada \n\
                mi ipsum, ut tristique tortor cursus sed. Mauris rhoncus elit at orci porttitor dapibus. Sed \n\
                bibendum purus vitae congue malesuada. Nam nec turpis augue. Quisque condimentum tellus ac \n\
                tellus fringilla rutrum. Praesent dapibus dignissim lobortis. Nulla fringilla lobortis felis \n\
                nec porta. Vestibulum aliquet interdum turpis, id auctor dolor tincidunt quis. Maecenas odio \n\
                erat, rhoncus at aliquam sit amet, elementum sed arcu. Quisque vel lacinia purus. Suspendisse \n\
                congue sodales elit sit amet varius.</p>', '<p>Phasellus sed metus id augue dictum \n\
                lacinia ac a nulla. Vivamus id dignissim tellus, at porttitor sapien. Nullam iaculis \n\
                nisi non leo posuere, at varius est accumsan. In interdum enim ac massa eleifend vestibulum. \n\
                Integer in est felis. Phasellus ut venenatis ante. Etiam dictum nunc in lectus pulvinar, \n\
                in placerat est venenatis. Morbi sagittis urna vel diam tempor fringilla. Suspendisse \n\
                in ante et ligula aliquet consequat. Curabitur eros neque, placerat et blandit quis, \n\
                dignissim accumsan libero. Suspendisse gravida arcu erat, id scelerisque turpis commodo \n\
                a. Donec in dui convallis leo pellentesque scelerisque vitae in justo. Mauris ornare \n\
                ipsum est, non sodales nibh pharetra ac. Ut a odio aliquet nisl consectetur lobortis. \n\
                Suspendisse neque dolor, pharetra sed nulla gravida, posuere laoreet tortor. Quisque \n\
                cursus tellus ac nisi molestie, nec accumsan magna scelerisque.</p>'];

            var i = 0,
                string = '';

            for (i; i < p; i += 1) {
                string += lorem[i];

                // Reset to zero if we run out of new paragraphs
                var reset = i >= lorem.length - 1;

                if (reset) {
                    i = -1;
                    p = p - lorem.length;
                }
            }
            return string;
        }

      };

    exports.Ipsify = function (options) {
        return new Ipsify(options).fill();
    };

}((typeof exports === 'object' && exports || this), document));