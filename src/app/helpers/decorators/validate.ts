export const validate = (
        target: any,
        propertyName: string,
        descriptor: TypedPropertyDescriptor<any>
    ) => {
    const method = descriptor.value;
    descriptor.value = function() {
        if (this.statusCode) {
          return method.apply(this, arguments);
        } else {
          return;
        }
    };
};
