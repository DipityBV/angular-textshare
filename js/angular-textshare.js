var app = angular.module('TeemrSocialShare', []);
app.directive('teemrSocialShare',[function(){
    return {
        restrict: 'A',
        replace: false,

        link: function($scope, element, attrs){
            $scope.baseClass= "tw-share";
            $scope.adapters = [{
                logo: 'twitter',
                url: 'http://twitter.com/share',
                buildUrl: function(text) {
                    if(text.length > 140) {
                        text = text.substring(0, 140 - (('...'.length) + (window.location.toString().length + 1)));
                    }

                    if('') {
                        text = text.substring(0, text.length - (' via @'.length));
                    }

                    var tweet = {
                        url: window.location.toString(),
                        text: text + '...'
                    };

                    if('') {
                        tweet.via = '';
                    }

                    return tweet;
                }
            },{
                logo: 'google-plus',
                url: 'https://plus.google.com/share',
                buildUrl: function(text) {
                    return {
                        url: window.location.toString(),
                        description: text
                    };
                }
            },{
                logo: 'linkedin',
                url: 'https://www.linkedin.com/shareArticle',
                buildUrl: function(text) {
                    return {
                        mini: true,
                        url: window.location.toString(),
                        title: "Spore Magazine",
                        summary: text,
                        source: "Spore Magazine"
                    };
                }
            },{
                logo: 'facebook',
                url: 'https://www.facebook.com/sharer/sharer.php',
                buildUrl: function(text) {
                    return {
                        u: window.location.toString(),
                        text: text
                    };
                }
            },{
                logo: 'pinterest',
                url: 'https://www.pinterest.com/pin/create/button/',
                buildUrl: function(text) {
                    return {
                        url: window.location.toString(),
                        description: text
                    };
                }
            }, {
                logo: 'google-plus',
                url: 'http://teemr.dev/search',
                buildUrl: function (text) {
                    return {
                        search: 'php',
                        tmp: 'raw'
                    };
                }
            }];

            element.on('mouseup', function(event) {
                setTimeout(function(){
                    if(document.getSelection().toString().length > 0){
                        $scope.selected = document.getSelection().toString();

                        var top = (event.clientY <= $scope.startY) ? $scope.startY : event.pageY,
                        center = ($scope.startX + event.pageX) / 2,
                        css = {
                                top: top - 50,
                                left: (center - (5 / 2) * 24),
                                extra_class: 'bottom'
                            };

                        var popup = $($scope.getPopup());
                        if (css.extra_class) {
                            popup.addClass($scope.baseClass + '--' + css.extra_class);
                        }
                        popup.css('top', css.top);
                        popup.css('left', css.left);
                        $(document.body).append(popup[0]);
                    }
                }, 100);

            });

            element.on('mousedown', function(event) {
                $scope.startX = event.pageX;
                $scope.startY = event.pageY;

                $('.' + $scope.baseClass).remove();

            });

            $scope.getPopup = function(){
                var popup = $(document.createElement('span'));
                popup.addClass($scope.baseClass);

                $scope.adapters.forEach(function (item, key) {
                    var button = $(document.createElement('span'));
                    button.addClass($scope.baseClass + '__link');
                    button.addClass($scope.baseClass + '__link--' + item.logo);
                    button.on('mousedown', $scope.shareText.bind(this, item, popup));

                    popup.append(button);
                }.bind(this));

                return popup[0];
            };

            $scope.shareText = function(adapter, popup) {
                var url = adapter.buildUrl.call(this, document.getSelection(popup).toString());

                if (typeof url === 'object') {
                    var parts = [];

                    for (var index in url) {
                        if (url.hasOwnProperty(index)) {
                            parts.push(index + '=' + url[index]);
                        }
                    }

                    url = parts.join('&');
                }

                window.open(adapter.url + '?' + url, '', 'width=715,height=450');
            };

        }
    }
}]);