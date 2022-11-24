import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import Modal from '../components/Modal';

function BadgeDetails(props) {
    const badge = props.badge;

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="" />
                        </div>
                        <div className="col-6">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                    </Link>
                            </div>

                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>

                                <DeleteBadgeModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BadgeDetails;
