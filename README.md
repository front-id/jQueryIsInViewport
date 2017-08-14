# jQueryIsInViewport

This plugin allows you to react when an element is in the viewport.
You need throw confetti when the user scroll and see an element?, so this plugin is for you!

## Usage
```javascript
$('.block').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('throw-confetti')
  }

  if (status === 'leaved') {
    $(this).removeClass('throw-confetti')
  }
})
```

## Options
Status can be '**entered**' or '**leaved**'.
