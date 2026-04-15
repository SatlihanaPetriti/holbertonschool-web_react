import Immutable from 'immutable';

function getImmutableObject(object){
    return Immutable.formJS(object);
}
export default getImmutableObject;