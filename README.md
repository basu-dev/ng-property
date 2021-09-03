# ng-property

**Cause change detection in angualar when the property value is changed without Zone.**

It is my first try to use angular without zonejs using a Property() decorator which causes change detection
to run when the property value is set.

## Installation

```bash
npm install ng-property --save
```

## Example

```ts
export class AppComponent implements OnInit {
  a: number = 0;
  @Property() b: number = 0;

  // do not cause change detection
  incrementA() {
    this.a++;
  }

  //causes change detection
  incrementB() {
    this.b++;
  }
}
```

## Further

> Implement Immutability
> Use Reference Check for objects
