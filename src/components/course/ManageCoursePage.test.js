// Wallaby runs these tests in Node
// so we need to make sure that 'document' is globally available
// before we try to use 'mount()';

// TODO: put this in wallaby config
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
      authors: [],
      actions: { saveCourse: () => Promise.resolve() }
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
  });
});
