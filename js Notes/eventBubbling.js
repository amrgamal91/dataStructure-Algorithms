// https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
// Event bubbling and capturing are two ways of event propagation in the HTML DOM API when an event
// occurs in an element inside another element, and both elements have registered a handler for that event.
// The event propagation mode determines in which order the elements receive the event

// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
// With capturing, the process is in reverse. We usually attach an event to a handler using the addEventListener function

addEventListener("click", handler, (useCapture = false));

// The third argument useCapture is the key. The default value is false. 
// So, it will be a bubbling model where the event is handled by the innermost element first and it
//  propagates outwards till it reaches the parent element. If that argument is true, it is capturing model.

// For Ex: Bubbling Model
    <div onClick="divHandler()">
        <ul onClick="ulHandler">
            <li id="foo"></li>
        </ul>
    </div>
    <script>
    function handler() {
    // do something here
    }
    function divHandler(){}
    function ulHandler(){}
    document.getElementById("foo").addEventListener("click", handler)
    </script>
    // When we click the list element, the order of execution of handlers is like this in bubbling (default) model.
    handler() => ulHandler() => divHandler()