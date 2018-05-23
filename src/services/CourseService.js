let _singleton = Symbol()

class CourseService {

    constructor(singleToken) {
        if(_singleton !== singleToken){
            throw new Error('Cannot instantiate directly');
        }
    }

    static get instance(){
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);


        return this[_singleton]
    }
}

export default CourseService;