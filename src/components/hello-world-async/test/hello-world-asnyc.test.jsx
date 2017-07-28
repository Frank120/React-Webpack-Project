import React from 'react';
import { mount } from 'enzyme';
import HelloWorldAsync from '../component';

test('HelloWorldAsync changes the button text to "Clicked!!!" after click', () => {
  // Render the async component
  const helloWorldAsync = mount(
    <HelloWorldAsync />,
  );

  expect.assertions(1);

  return helloWorldAsync.getNode().AsyncLoad.loadPromise.then(() => {
    helloWorldAsync.find('button').simulate('click');

    expect(helloWorldAsync.find('button').text().trim()).toEqual('Clicked!!!');
  });
});
