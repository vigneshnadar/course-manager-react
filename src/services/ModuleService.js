let _singleton = Symbol()
// const COURSE_API_URL = 'https://course-manager-server.herokuapp.com/api/course';
const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';

class ModuleService {



    constructor(singleToken) {
        if(_singleton !== singleToken){
            throw new Error('Cannot instantiate directly');
        }
    }

    static get instance(){
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);


        return this[_singleton]
    }


    createModule(courseId, module){
        return fetch(MODULE_API_URL.replace('CID',courseId),{
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

}

export default ModuleService;