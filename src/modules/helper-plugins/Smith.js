!(function (Smith){

    function AS_ARRAY(){
        return Array.prototype.slice.apply(this, arguments);
    }
    function DEF_PROP(target, name, value, enumerable){
        return Object.defineProperty(target, name, NEW_PROP(value, enumerable));
    }
    function IS_ARRAY(target){
        return Array.isArray(target);
    }
    function IS_ACTUAL(target){
        return target !== void 0 && target !== null;
    }
    function IS_STRING(target){
        return IS_ACTUAL(target) && typeof target === 'string';
    }
    function FUN_FLAT(target){
        var result = [];
        var length = target.length;
        for (var i = 0; i < length; i++){
            var ns = target[i];
            if (IS_ARRAY(ns)){
                result.push.apply(result, FUN_FLAT(ns));
            } else {
                if (IS_ACTUAL(ns)){
                    result.push(ns);
                }
            }
        }
        return result;
    }
    function NEW_PROP(target, enumerable){
        return {
            configurable : true,
            enumerable : !! enumerable,
            writable : true,
            value : target
        }
    }

    var NOOP = function (){};

    var TXT_EXHIBIT_COMPONENT = 'SMITH:COMPONENT';
    var TXT_EXHIBIT_DIRECTIVE = 'SMITH:DRIECTIVE';

    Smith.createClass     = function (proto){
        return (function (constructor){
            return constructor.prototype = proto, constructor;
        } (
            (function (parent){
                return function (){ parent.apply(this, arguments); };
            } (proto.constructor || NOOP))
        ));
    };
    Smith.createElement   = function (type, props){
        var natures = props || {};
        var insider = FUN_FLAT(AS_ARRAY.call(arguments, 2));
        var element = {
            props : {},
            type  : type,
            cmd   : natures.cmd || [],
            key   : natures.key,
            ref   : natures.ref
        };
        for (name in natures){
            if (name !== 'cmd' &&
                name !== 'key' &&
                name !== 'ref' &&
                IS_ACTUAL(natures[name])){
                    element.props[name] = natures[name];
            }
        }
        DEF_PROP(element.props, 'children', insider);
        return element;
    };
    Smith.redactorElement = function(temp){
        if (IS_STRING(temp)){
            var component = {};
            var directive = {};
            var transform = {};
            FUN_FLAT(AS_ARRAY.call(arguments, 1)).forEach(function (ns) {
                if (HAS_PROP(ns, TXT_EXHIBIT_COMPONENT)) {
                    DEF_PROP(component, ns[TXT_EXHIBIT_COMPONENT], ns);
                }
                if (HAS_PROP(ns, TXT_EXHIBIT_DIRECTIVE)) {
                    DEF_PROP(directive, ns[TXT_EXHIBIT_DIRECTIVE], ns);
                }
                if (HAS_PROP(ns, TXT_EXHIBIT_TRANSFORM)) {
                    DEF_PROP(transform, ns[TXT_EXHIBIT_TRANSFORM], ns);
                }
            });
            var provide = {
                v : Smith.createElement,
                m : EXHIBIT_ENGINE_LOOPS,
                c : EXHIBIT_ENGINE_QNAME(component),
                d : EXHIBIT_ENGINE_ORDER(directive),
                t : EXHIBIT_ENGINE_PIPER(transform)
            };
            var trustor = new Function('Smith', 'with(this){return' + GAN_ELEMENT(TPL_XHTML_PARSER(temp.trim())) + '}');
            return function () { return trustor.call(IS_ACTUAL(this) && this !== WIN ? this : {}, provide); };
        }
        return temp;
    }
    Smith.Component       = function (name, redactor){
        return function (target){
            if (redactor){
                target.prototype.render = redactor;
            }
            return DEF_PROP(target, TXT_EXHIBIT_COMPONENT, name);
        };
    };
} (this.Smith = {}));