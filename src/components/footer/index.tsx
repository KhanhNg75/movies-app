import React from "react";

import { Link } from "react-router-dom";

import bg from "assets/footer-bg.jpg";
import logo from "assets/tmovie.png";

import { Header as H, Footer as F, Wrapper as W } from "styles";

export const Footer = () => {
  return (
    <>
      <F.Footer backgroundImage={`url(${bg})`}>
        <W.Container>
          <F.FooterContent>
            <p>
              Copyright [2016] Khanh Nguyen <br />
            </p>
            <span>
              Licensed under the Apache License, Version 2.0 (the "License");
              you may not use this file except in compliance with the License.{" "}
              <br />
              You may obtain a copy of the License at
              <br />
              http://www.apache.org/licenses/LICENSE-2.0 <br />
              Unless required by applicable law or agreed to in writing,
              software distributed under the License is distributed on an "AS
              IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
              express or implied. See the License for the specific language
              governing permissions and limitations under the License.
              <br />
            </span>
          </F.FooterContent>
        </W.Container>
      </F.Footer>
    </>
  );
};
