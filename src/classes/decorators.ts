// ==================================================================================================
// Task 08.01. Class Decorators (sealed)
// ==================================================================================================

export function sealed(param: string) {
    return function(constructor: Function): void {
        console.log(`Sealing the constructor ${param}`);
        console.log(constructor);
        console.log(constructor.prototype);

        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}

// ==================================================================================================
// Task 08.02. Class Decorators that replace constructor functions (logger)
// ==================================================================================================

export function logger<Tfunction extends Function>(constructor: Tfunction): Tfunction {
    const newConstructor: Function = function() {
        console.log('Creating new instance');
        console.log(constructor);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(constructor.prototype);

    newConstructor.prototype.printLibrarian = function(): void {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as Tfunction;
}


// ==================================================================================================
// Task 08.03. Method Decorator (writable)
// ==================================================================================================


export function writable(isWritable: boolean) {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(target);
        console.log(methodName);
        console.log(descriptor);

        descriptor.writable = isWritable;

        return descriptor;
    };
}

// ==================================================================================================
// Task 08.04. Method Decorator (timeout)
// ==================================================================================================

export function timeout(ms: number) {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (window.confirm('Are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
            };
        };

        return descriptor;
    };
}

// f();
// o.f()
// new f()
// f.call()

// ==================================================================================================
// Task 08.05. Parameter Decorator (logParameter)
// ==================================================================================================

export function logParameter(target: any, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;

    (proto[key] ??= []).push(index);
}

export function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indexes = proto[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
};