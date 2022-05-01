import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as objectPath from 'object-path';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'base-component',
  template: ``,
})
export class BaseComponent implements OnInit, OnDestroy {
  form: FormGroup;
  msgT: any = {};
  msg: any = {};

  get f() {
    return this.form.controls;
  }

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.initialForm();
  }

  initialForm() {
    this.form = this.fb.group({});
  }

  validateEach(cname: string) {
    if (this.f[cname].invalid) {
      this.setMsgWithKey(cname, Object.keys(this.f[cname].errors as any)[0]);
    } else {
      this.resetMsg(cname);
    }
  }

  setMsgWithKey(cname: string, key: string) {
    objectPath.set(
      this.msg,
      cname,
      objectPath.get(this.msgT, `${cname}.${key}`)
    );
  }

  resetMsg(cname: string) {
    objectPath.set(this.msg, cname, '');
  }

  resetAllMsg() {
    Object.keys(this.msg).forEach((_cn: string) => this.resetMsg(_cn));
  }

  validateAll() {
    Object.keys(this.f).forEach((_cn: string) => {
      this.validateEach(_cn);
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.validateAll();
      return;
    }
    // do something to submit
  }

  ngOnDestroy() {
    this.resetAllMsg();
  }
}
