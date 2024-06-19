export function createState (initialState) {
    let state = initialState
    const listeners = []
    console.log('state initialaized');
    function setState (newState) {
        state = {...state,...newState}
        listeners.forEach(listener => listener(state))
    }

    function subscribe (listener) {
        listeners.push(listener)
        return () => {
           const index = listeners.indexOf(listener)
           if(index > -1){
               listeners.splice(index,1)
           }

        };
    }

    function getState() {
        return state
    }

    return {
        getState,
        setState,
        subscribe,
    };
    
}