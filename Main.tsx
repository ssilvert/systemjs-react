/* 
 * Copyright 2018 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button,Tabs,Tab} from '@patternfly/react-core';

const e = React.createElement;

export interface MainProps {
}

export class Main extends React.Component<MainProps> {
    
    public constructor(props: MainProps) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Button variant="primary">PF4-react Button</Button>
                <Tabs isFilled>
                    <Tab eventKey={0} title="Tab item 1">
                      Tab 1 section
                    </Tab>
                    <Tab eventKey={1} title="Tab item 2">
                      Tab 2 section
                    </Tab>
                    <Tab eventKey={2} title="Tab item 3">
                      Tab 3 section
                    </Tab>
                </Tabs>
 
            </React.Fragment>
        );
    }
};

const domContainer = document.querySelector('#main_react_container');
ReactDOM.render(e(Main), domContainer);