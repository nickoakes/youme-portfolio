import React from 'react';

import Header from './Header';

const Services = (props) => {
    return (
        <div>
            <Header username={props.username}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <h3 className="title">문서 번역</h3>
                                    <div className="price-value">5만원 / 1000단어</div>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> 블라블라블라블라블라</li>
                                    <li><i className="fa fa-times"></i> 블라블라블라블라블라</li>
                                </ul>
                                <a type="button" className="btn btn-info btn-lg pricingTable-signup" data-toggle="modal" data-target="#doc-translate">더보기</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable blue">
                                <div className="pricingTable-header">
                                    <h3 className="title">영상 번역</h3>
                                    <div className="price-value">3만원 / 10분</div>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> 영어 <span class="glyphicon glyphicon-arrow-right"></span> 한국어</li>
                                    <li><i className="fa fa-check"></i> 블라블라블라블라블라</li>
                                </ul>
                                <a type="button" className="btn btn-info btn-lg pricingTable-signup" data-toggle="modal" data-target="#vid-translate-kor">더보기</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable yellow">
                                <div className="pricingTable-header">
                                    <h3 className="title">영상 번역</h3>
                                    <div className="price-value">4만원 / 10분</div>
                                </div>
                                <ul className="pricing-content">
                                    <li><i className="fa fa-check"></i> 한국어 <span class="glyphicon glyphicon-arrow-right"></span> 영어</li>
                                    <li><i className="fa fa-check"></i> 블라블라블라블라블라</li>
                                </ul>
                                <a type="button" className="btn btn-info btn-lg pricingTable-signup" data-toggle="modal" data-target="#vid-translate-eng">더보기</a>
                            </div>
                        </div>
                        <div id="doc-translate" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h1 className="modal-title">문서번역</h1>
                            </div>
                            <div className="modal-body">
                                <p>블라블라블라블라블라</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="vid-translate-kor" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h1 className="modal-title">영상 번역</h1>
                            </div>
                            <div className="modal-body">
                                <p>영어 <span class="glyphicon glyphicon-arrow-right"></span> 한국어</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="vid-translate-eng" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h1 className="modal-title">영상 번역</h1>
                            </div>
                            <div className="modal-body">
                                <p>한국어 <span class="glyphicon glyphicon-arrow-right"></span> 영어</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
                            </div>
                            </div>

                        </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Services