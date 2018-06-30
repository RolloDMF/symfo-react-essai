<?php

namespace App\Controller;

use App\Entity\Data;
use App\Form\DataType;
use App\Repository\DataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/data")
 */
class DataController extends Controller
{
    /**
     * @Route("/entity1", name="entity1", methods="GET")
     */
    public function entity1(DataRepository $dataRepository)
    {
        return new JsonResponse($dataRepository->findAll());
    }

    /**
     * @Route("/entity2", name="entity2", methods="GET")
     */
    public function entity2(DataRepository $dataRepository)
    {
       
    }
}
